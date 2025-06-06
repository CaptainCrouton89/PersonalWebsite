import { tool } from "ai";
import { z } from "zod";

export const searchGitHubRepos = tool({
  description: "Search Silas's recent GitHub repositories",
  parameters: z.object({
    query: z
      .string()
      .optional()
      .describe(
        "Optional search query to filter repositories by name or description"
      ),
    limit: z
      .number()
      .optional()
      .default(10)
      .describe("Number of repositories to return (max 30)"),
  }),
  execute: async ({ query, limit = 10 }) => {
    console.log(`Searching GitHub repos - Query: ${query}, Limit: ${limit}`);
    
    try {
      const token = process.env.GITHUB_TOKEN;
      if (!token) {
        console.error("GitHub token not configured");
        return { error: "GitHub token not configured" };
      }

      // Search user's repositories
      let url =
        "https://api.github.com/user/repos?sort=updated&per_page=" +
        Math.min(limit, 30);

      console.log(`Fetching repos from: ${url}`);
      
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.ok) {
        console.error(`GitHub API error: ${response.status}`);
        return { error: `GitHub API error: ${response.status}` };
      }

      let repos = await response.json();
      console.log(`Found ${repos.length} repositories`);

      // Filter by query if provided
      if (query) {
        repos = repos.filter(
          (repo: any) =>
            repo.name.toLowerCase().includes(query.toLowerCase()) ||
            (repo.description &&
              repo.description
                .toLowerCase()
                .includes(query.toLowerCase()))
        );
        console.log(`Filtered to ${repos.length} repositories matching query`);
      }

      // Fetch README content for each repository
      const repositoriesWithReadme = await Promise.all(
        repos.map(async (repo: any) => {
          let readme = null;
          try {
            const readmeResponse = await fetch(
              `https://api.github.com/repos/${repo.full_name}/readme`,
              {
                headers: {
                  Authorization: `token ${token}`,
                  Accept: "application/vnd.github.v3+json",
                },
              }
            );

            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              // Decode base64 content
              readme = Buffer.from(readmeData.content, 'base64').toString('utf-8');
              console.log(`Fetched README for ${repo.name}`);
            }
          } catch (error) {
            console.log(`No README found for ${repo.name}`);
          }

          return {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated_at: repo.updated_at,
            created_at: repo.created_at,
            private: repo.private,
            readme: readme,
          };
        })
      );

      const result = {
        repositories: repositoriesWithReadme,
      };
      
      console.log(`Returning ${result.repositories.length} repositories`);
      return result;
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
      return { error: "Failed to fetch repositories" };
    }
  },
});

export const searchGitHubCommits = tool({
  description: "Search Silas's recent commits across repositories",
  parameters: z.object({
    repo: z
      .string()
      .optional()
      .describe(
        "Specific repository name to search commits in (format: owner/repo)"
      ),
    limit: z
      .number()
      .optional()
      .default(10)
      .describe("Number of commits to return (max 30)"),
    since: z
      .string()
      .optional()
      .describe("Only show commits after this date (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ)"),
    until: z
      .string()
      .optional()
      .describe("Only show commits before this date (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ)"),
  }),
  execute: async ({ repo, limit = 10, since, until }) => {
    console.log(`Searching GitHub commits - Repo: ${repo}, Limit: ${limit}, Since: ${since}, Until: ${until}`);
    
    try {
      const token = process.env.GITHUB_TOKEN;
      if (!token) {
        console.error("GitHub token not configured");
        return { error: "GitHub token not configured" };
      }

      let commits = [];

      if (repo) {
        // Search specific repository
        let url = `https://api.github.com/repos/${repo}/commits?per_page=${Math.min(
          limit,
          30
        )}`;
        
        // Add date filters if provided
        if (since) {
          url += `&since=${encodeURIComponent(since)}`;
        }
        if (until) {
          url += `&until=${encodeURIComponent(until)}`;
        }
        
        console.log(`Fetching commits from specific repo: ${url}`);
        
        const response = await fetch(url, {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!response.ok) {
          console.error(`GitHub API error: ${response.status}`);
          return { error: `GitHub API error: ${response.status}` };
        }

        const repoCommits = await response.json();
        console.log(`Found ${repoCommits.length} commits in ${repo}`);
        
        commits = repoCommits.map((commit: any) => ({
          repo: repo,
          sha: commit.sha.substring(0, 7),
          message: commit.commit.message,
          author: commit.commit.author.name,
          date: commit.commit.author.date,
          url: commit.html_url,
        }));
      } else {
        // Get commits from all recent repositories
        console.log("Fetching commits from all recent repositories");
        
        const reposResponse = await fetch(
          "https://api.github.com/user/repos?sort=updated&per_page=10",
          {
            headers: {
              Authorization: `token ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!reposResponse.ok) {
          console.error(`GitHub API error: ${reposResponse.status}`);
          return { error: `GitHub API error: ${reposResponse.status}` };
        }

        const repos = await reposResponse.json();
        console.log(`Found ${repos.length} repositories to search`);

        // Get recent commits from each repo
        for (const repository of repos.slice(0, 5)) {
          // Limit to 5 repos to avoid rate limiting
          try {
            console.log(`Fetching commits from ${repository.full_name}`);
            
            let commitUrl = `https://api.github.com/repos/${repository.full_name}/commits?per_page=3`;
            
            // Add date filters if provided
            if (since) {
              commitUrl += `&since=${encodeURIComponent(since)}`;
            }
            if (until) {
              commitUrl += `&until=${encodeURIComponent(until)}`;
            }
            
            const commitsResponse = await fetch(commitUrl, {
              headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json",
              },
            });

            if (commitsResponse.ok) {
              const repoCommits = await commitsResponse.json();
              console.log(`Found ${repoCommits.length} commits in ${repository.full_name}`);
              
              commits.push(
                ...repoCommits.map((commit: any) => ({
                  repo: repository.full_name,
                  sha: commit.sha.substring(0, 7),
                  message: commit.commit.message,
                  author: commit.commit.author.name,
                  date: commit.commit.author.date,
                  url: commit.html_url,
                }))
              );
            }
          } catch (e) {
            console.error(`Error fetching commits from ${repository.full_name}:`, e);
            // Skip repos that error
            continue;
          }
        }

        // Sort by date and limit
        commits.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        commits = commits.slice(0, limit);
        console.log(`Returning ${commits.length} total commits`);
      }

      return { commits };
    } catch (error) {
      console.error("Failed to fetch commits:", error);
      return { error: "Failed to fetch commits" };
    }
  },
});
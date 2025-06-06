import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { searchGitHubCommits, searchGitHubRepos } from "./tools";
import { workHistoryKnowledgePrompt } from "./workHistoryKnowledge.prompt";

export async function POST(req: Request) {
  const { messages }: { messages: any[] } = await req.json();

  const systemPrompt = workHistoryKnowledgePrompt;

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: systemPrompt,
    messages,
    maxSteps: 10,
    tools: {
      searchGitHubRepos,
      searchGitHubCommits,
    },
  });

  return result.toDataStreamResponse();
}

import carletonLogo from "../assets/carleton.png";
import ceaLogo from "../assets/cea.png";
import compozeLogo from "../assets/compoze.png";
import concordLogo from "../assets/concord.jpeg";
import unityLogo from "../assets/unity.png";

export const timelineData = [
  {
    id: "contractor",
    dateString: "Feb 2025 - Present",
    title: "Independent Contractor",
    location: "San Francisco, CA",
    companyName: "Rhyneer Consulting LLC",
    imgSrc:
      "https://d3fcqgp9jd8oav.cloudfront.net/branding/RhyneerConsulting.png",
    stats: [
      { name: "System Architecture", level: 70 },
      { name: "AI Integration", level: 80 },
      { name: "Start-uppy stuff :)", level: 90 },
    ],
    description: <p>I provide consulting services to a variety of clients.</p>,
    bullets: [
      <li key="odapt-1">
        <b>Migrated entire frontends</b> from raw html/js to React.
      </li>,
    ],
  },
  {
    id: "compoze",
    dateString: "Jan 2025 - Feb 2025",
    title: "AI Engineer",
    location: "Minneapolis, MN",
    companyName: "CompozeLabs",
    imgSrc: compozeLogo,
    stats: [
      { name: "AI Integration", level: 75 },
      { name: "NextJS", level: 80 },
      { name: "AWS", level: 60 },
      { name: "AI Framework Design", level: 70 },
    ],
    description: (
      <p>
        I solo-stood up a <strong>voice-interactive sales-coaching tool</strong>
        . Using a novel architecture that uses multiple LLMs to analyze a
        conversation in real time, I was able to build a tool where{" "}
        <strong>
          a user can practice real-time sales pitches against a voice AI modeled
          on a real person.
        </strong>{" "}
        The AI can ask questions, respond to the user, and provide feedback on
        the user&apos;s performance.
      </p>
    ),
    bullets: [
      <li key="compoze-1">
        POV was estimated to take 4-6 weeks, <b>I did it in one</b>.
      </li>,
      <li key="compoze-2">
        <b>Designed and implemented</b> a novel &quot;thinker&quot;
        architecture. <b>Integrates multiple LLMs</b> to analyze a conversation
        in real time and gave feedback to the voice model,{" "}
        <b>enabling higher performance</b>.
      </li>,
      <li key="compoze-3">
        Worked closely with client to <b>refine product</b>,{" "}
        <b>manage project scope and priorities</b> and{" "}
        <b>rapidly iterate on the product to meet client needs</b>.
      </li>,
      <li key="compoze-4">
        Had the term <b>&quot;silas velocity&quot;</b> coined by colleagues,
        referring to the speed at which I develop quality code.
      </li>,
    ],
  },
  {
    id: "concord",
    dateString: "Aug 2022 - Dec 2024",
    title: "Consultant",
    location: "Minneapolis, MN",
    companyName: "Concord USA",
    imgSrc: concordLogo,
    stats: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "SQL Server", level: 60 },
      { name: ".NET", level: 70 },
    ],
    description: (
      <p>
        I did technical consulting. This meant{" "}
        <strong>
          diagnosing and solving problems for a client before they knew they had
          them.
        </strong>{" "}
        I helped refine product needs, coordinated resources across teams to
        solve solutions quickly, and architected new solutions. One part
        professional communicator, one part software engineer, and a little bit
        of everything else.
      </p>
    ),
    bullets: [
      <li key="concord-1">
        Fullstack developer for an internal web app used company-wide.{" "}
        <b>Produced 2x the commits and 5x the code</b> compared to any other
        developer on the project. I work fast.
      </li>,
      <li key="concord-2">
        <b>Optimized page loading by seconds</b>. Refactored, optimized, and
        modernized massive quantities of enterprise code base, reducing
        technical debt.
      </li>,
      <li key="concord-3">
        <b>
          Architected and coordinated development of features across multiple
          applications
        </b>{" "}
        and 3rd-party APIs, such as for a messaging service to provide real-time
        updates to users.
      </li>,
      <li key="concord-4">
        Identified and fixed longstanding authentication and authorization
        issues across the application,{" "}
        <b>resolving critical security vulnerabilities in production code</b>.
      </li>,
    ],
  },
  {
    id: "mystica",
    dateString: "Aug 2024 - Dec 2024",
    title: "Lead Developer at Mystica",
    location: "Minneapolis, MN",
    companyName: "Tricky Djinn LLC",
    imgSrc: "https://d3fcqgp9jd8oav.cloudfront.net/misc/Mystica M.png",
    stats: [
      { name: "ReactNative", level: 90 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "Spring", level: 90 },
    ],
    description: (
      <p>
        I co-founded a startup thats building a geo-RPG,{" "}
        <strong>powered by AI</strong>. I am{" "}
        <strong>acting as the CTO and lead developer</strong> on our team of
        five. Learn more at <a href="https://mystica.cloud">mystica.cloud</a>.
        We&apos;re building a new kind of game that uses AI to run fantasy text
        adventures based on your location.
      </p>
    ),
    readMoreText: (
      <div className="columns">
        <p>
          Mystica is an AI-powered, text-based adventure game. In it, you wander
          the real world, going to real locations, and fight fantasy creatures.
          However, unlike other games that blend game and reality, we don&apos;t
          use AR—instead, we focus on the combat experience itself, aiming to
          replicate text adventures and tabletop roleplaying games. In Mystica,
          you are met with a situation and are tasked with overcoming whatever
          challenge it presents by describing the choices you make. The AI
          responds, and that&apos;s how the game plays out.
        </p>
        <p>
          From a technical standpoint, this is quite challenging. Despite the
          &quot;magic&quot; of AI, we&apos;re asking a lot of it—we&apos;re
          asking it to act as a game engine. At Tricky Djinn, I was tasked with
          designing and implementing the fundamental game loop interaction
          between player and AI. Rather than building our own AI from scratch, I
          decided to use an LLM API. However, LLMs return text, not data, and
          are trained to behave like chat bots, not game engines. Initially, I
          behave like chat bots, not game engines. Initially, I solved this by
          using a sequence of prompts where each step wraps user content in
          specific instructions on processing and output-format, spits out some
          xml, and then gets repeated until the steps are completed. Finally,
          it&apos;ll spit out its response for the outcome, along with a bunch
          of meta data for affecting user health and the state of the encounter.
          This, I believe, is also partially how Open AI&apos;s newest
          strawberry model works.
        </p>
        <p>
          This process worked great, however it can be improved. It&apos;s
          expensive to use a big model (it was required for the complexity of
          outputs we were asking of it), and we were using a lot of tokens.
          However, I realized that we could use the larger model with all of the
          massive, hyper-engineered prompts to create training data for a
          smaller model. The smaller model wouldn&apos;t need instructions on
          what to do, nor would it need instructions on output formatting. With
          it need instructions on output formatting. With a few iterations, I
          built our training data and fine tuned a smaller LLM model. Despite
          fine-tuned models costing more, this new process reduced our input
          token-count by over 50%, saving us 30% on our projected operating
          costs.
        </p>
      </div>
    ),
    bullets: [
      <li key="mystica-1">
        Designed and implemented system that{" "}
        <b>integrates text-based LLM models with the game engine</b>. Enables
        never-before-seen videogame mechanics and storytelling.
      </li>,
      <li key="mystica-2">
        Set up multiplayer using websocket connections and Redis
        &quot;sessions&quot;, <b>balancing lightning fast communication</b>{" "}
        between players with a <b>scalable backend and database</b>.
      </li>,
      <li key="mystica-3">
        Set up <b>multiple environments</b> for development, testing, and live,
        with <b>effortless deployment</b> for each.
      </li>,
    ],
  },
  {
    id: "cogm",
    dateString: "Mar 2023 - Jul 2024",
    title: "Founder of Co-GM",
    location: "Minneapolis, MN",
    companyName: "Rhyneer Consulting LLC",
    imgSrc:
      "https://d3fcqgp9jd8oav.cloudfront.net/co-gm/assets/screenshots/computer-session.png",
    description: (
      <p>
        I built a powerful wiki tool for storytellers. Check it out at{" "}
        <a href="https://cogm.tech">cogm.tech</a>.{" "}
        <strong>1500+ users, 50+ paying subscribers</strong>, and still growing.
        I did everything from UI/UX design to system architecting to marketing
        to customer service.
      </p>
    ),
    stats: [
      { name: "JavaScript", level: 90 },
      { name: "Express", level: 80 },
      { name: "Node", level: 75 },
      { name: "Azure App Services", level: 70 },
      { name: "CSS", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
    readMoreText: (
      <div className="columns">
        <p>
          Co-GM is an online note taking tool that I built specifically to help
          GMs (the people who run games of Dungeons and Dragons) keep their
          ideas organized and their head in the game rather than in their
          screens. It&apos;s a niche tool, but since the project&apos;s
          beginnings I&apos;ve garnered nearly 1,500 users and over 50 paying
          monthly subscribers. Besides notes, the tool incorporates a large
          array of other tools critical to any GM&apos;s toolbox, and integrates
          all of them. Notes link together, but you can also link to things that
          aren&apos;t notes to create other effects, like automatically rolling
          dice or generating random content. You can share libraries of notes
          with other users, and you can publish your work on a shared workshop
          to allow other users to find tools they&apos;d find useful for
          themselves.
        </p>
        <p>
          To build this tool, I taught myself almost everything. It&apos;s built
          on a React frontend, it&apos;s got a TypeScript Node backend, and all
          the data is stored in MongoDB. The app is set up with CI/CD via GitHub
          actions, and deploys automatically to staging environments in Azure
          App services. From there, I can perform further testing and release to
          users. In addition to all of the languages and frameworks used, I
          overcame the following technical challenges:
        </p>
        <ul>
          <li>
            I built the security from scratch, enabling a system where users can
            share content with each other but not edit each other&apos;s work.
          </li>
          <li>
            I designed and implemented nuanced and complex note-relationship
            patterns. For example, typing out a date in a note makes the note
            automatically show up in a fantasy (non-gregorian) calendar.
          </li>
          <li>
            I implemented a rich rich text editor in the browser, and then
            extended it to enable custom elements and behaviors.
          </li>
        </ul>
        <p>
          Building and growing Co-GM required a lot of additional softer skills.
          I made the creatives and ran an ad campaign on Reddit with comments
          turned on, meaning I was regularly interacting directly with my
          potential consumers. I was Customer Support as well, meaning I was
          directly helping those consumers troubleshoot their issues (it also
          made me much more concerned about the quality of logging in prod, the
          importance of backups, and how to do smooth feature rollouts). And
          lastly, for a few months of the project, I managed to convince someone
          else to work on the project with me. I onboarded them, and during that
          time acted as a mentor, teaching them the work cycle of the project
          and helping them find easier but still meaningful tasks to work on.
        </p>
      </div>
    ),
    bullets: [
      <li key="cogm-1">
        <b>Solo-developed</b> a web app. Designed, architected, programmed, and
        maintained by me.
      </li>,
      <li key="cogm-2">
        App includes a custom-built <b>active directory</b>, complex{" "}
        <b>wiki functionalities</b>, a <b>shareable marketplace</b> where users
        can subscribe to and rate other users&apos; content, and a{" "}
        <b>paid subscription</b> option, among other features.
      </li>,
      <li key="cogm-3">
        Ran ad campaign that saw a{" "}
        <b>1% CTR and 30% landing page conversion rate.</b>
      </li>,
      <li key="cogm-4">
        <b>Automated E2E testing and CI/CD</b>.
      </li>,
    ],
  },
  {
    id: "gamedev",
    dateString: "Sep 2021 - Sep 2022",
    title: "Game Developer",
    location: "Claremont, CA",
    companyName: "Independent",
    imgSrc: unityLogo,
    stats: [
      { name: "C#", level: 85 },
      { name: "OOP Principles", level: 97 },
      { name: "Unity", level: 80 },
    ],
    description: (
      <p>
        In partnership with another developer, I developed{" "}
        <a href="https://www.kickstarter.com/projects/1863228575/tell-your-tale?ref=discovery&term=Tell%20Your%20Tale&total_hits=16&category_id=35">
          Tell Your Tale
        </a>
        , a multiplayer, 3D RPG, from the ground up.{" "}
        <strong>
          Advanced OOP, lots of design patterns, and concurrency/race conditions
        </strong>
        —it was a glorious mess.
      </p>
    ),
    bullets: [
      <li key="gamedev-1">
        Developed a <b>multiplayer</b>, RPG game with{" "}
        <b>over 20,000 lines of C# code</b>, using industry standard tools.
      </li>,
      <li key="gamedev-2">
        Implemented <b>procedural terrain algorithms</b>, combat systems and
        physics for a 3D environment, <b>integration with the app store</b>,{" "}
        <b>multiplayer functionality</b>, and custom, internal tools for faster
        development.
      </li>,
    ],
  },
  {
    id: "cea",
    dateString: "Jun 2021 - Sep 2021",
    title: "AI Engineering Intern",
    location: "Boulder, CO",
    companyName: "Clean Energy Asociates",
    imgSrc: ceaLogo,
    stats: [
      { name: "Python", level: 90 },
      { name: "ML Libraries", level: 80 },
    ],
    description: (
      <p>
        Developed machine vision algorithms for processing and flagging images
        of solar panels. They set me loose, and I wowed them by{" "}
        <strong>
          automating training data collection and then completing the AI model
          that used it
        </strong>
        .
      </p>
    ),
    bullets: [
      <li key="cea-1">
        Identified inefficiency in training data collection methods and{" "}
        <b>independently developed a Python application</b> using classical
        Python image processing libraries to turn images into usable training
        data, saving the company 25 hours of work per week (
        <b>500%+ increase in efficiency</b>). I hate inefficiency.
      </li>,
      <li key="cea-2">
        Implemented convolutional neural networks for image processing using{" "}
        <b>TensorFlow</b> and <b>Keras</b>. Achieved perfect accuracy in drawing
        bounding boxes around solar panel cells.
      </li>,
    ],
  },
  {
    id: "carleton",
    dateString: "Sep 2018 - Sep 2022",
    title: "Computer Science Student",
    location: "Northfield, MN",
    companyName: "Carleton College",
    imgSrc: carletonLogo,
    stats: [
      { name: "Python", level: 90 },
      { name: "ML Libraries", level: 80 },
      { name: "C", level: 60 },
    ],
    description: (
      <p>
        While at Carleton, I focused on AI and machine learning. For my capstone
        AI project{" "}
        <strong>
          I received distinction for exceptional work among CS graduates
        </strong>
        .
      </p>
    ),
    bullets: [
      <li key="carleton-1">
        <strong>Reddit AI</strong>: Built a Reddit bot trained with transformers
        and a <b>novel &quot;pass-through&quot; technique</b> to generate
        comments.{" "}
        <b>College awarded me distinction for exceptional work in major.</b>
      </li>,
      <li key="carleton-2">
        <strong>AI Stock market analysis</strong>: Made tool that uses machine
        learning to predict stock prices.{" "}
        <b>Found statistically significant results.</b>
      </li>,
    ],
  },
];

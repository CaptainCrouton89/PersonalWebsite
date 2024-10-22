/* eslint-disable react/no-unescaped-entities */
import "primeicons/primeicons.css";
import { useTypewriter } from "sr-quick";
import "./App.css";
import carletonLogo from "./assets/carleton.png";
import ceaLogo from "./assets/cea.png";
import concordLogo from "./assets/concord.jpeg";
import profile from "./assets/main2.png";
import unityLogo from "./assets/unity.png";
import TimelineConnector from "./components/Connectors/TimelineConnector";
import TimelineEnd from "./components/Connectors/TimelineEnd";
import TimelineStart from "./components/Connectors/TimelineStart";
import TimelineBlock from "./components/TimelineBlock";

function App() {
  const imSilasText = useTypewriter("I'm Silas", 100, 1000);

  return (
    <>
      <div className="app__header">
        <img src={profile} className="profile" alt="profile picture" />
        <div className="icons">
          <i
            className="pi pi-send"
            onClick={() =>
              window.open(
                "mailto:rhyneer.silas@gmail.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <i
            className="pi pi-linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/silas-rhyneer/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <i
            className="pi pi-github"
            onClick={() =>
              window.open(
                "https://github.com/CaptainCrouton89",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
        <h1>
          Hi! <strong>{imSilasText}</strong>
        </h1>
        <p>
          I'm a software engineer who's hobbies include: <strong>coding</strong>
          , <strong>coding</strong>, and <strong>coding</strong>. Sometimes I do
          other things too like launching side projects, developing games, and
          running D&D campaigns, but mostly I like to code.
        </p>
        <h4>Here's what I've been up to...</h4>
      </div>
      <div className="app__body">
        <div className="app__timeline">
          <h2>Timeline</h2>
          <TimelineStart />
          <TimelineBlock
            dateString="2022 - Present"
            title="Consultant"
            companyName="Concord USA"
            imgSrc={concordLogo}
            stats={[
              { name: "React", level: 85 },
              { name: "TypeScript", level: 90 },
              { name: "SQL Server", level: 60 },
              { name: ".NET", level: 70 },
            ]}
            description={
              <p>
                I do technical consulting. This means{" "}
                <strong>
                  diagnosing and solving problems for a client before they know
                  they have them.
                </strong>{" "}
                I help refine product needs, coordinate resources across teams
                to solve solutions quickly, and architect new solutions. One
                part professional communicator, one part software engineer, and
                a little bit of everything else.
              </p>
            }
          >
            <ul>
              <li>
                Fullstack developer for an internal web app used company-wide.{" "}
                <b>Produced 2x the commits and 5x the code</b> compared to any
                other developer on the project. I work fast.
              </li>
              <li>
                <b>Optimized page loading by seconds</b>. Refactored, optimized,
                and modernized massive quantities of enterprise code base,
                reducing technical debt.
              </li>
              <li>
                <b>Architected and coordinated</b> development of feature across{" "}
                <b>four different applications</b> and a 3rd-party API for
                messaging service to provide real-time updates to users.
              </li>
              <li>
                Identified and fixed authentication and authorization issues
                across the application,{" "}
                <b>
                  resolving critical security vulnerabilities in production code
                </b>
                .
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Aug 2024 - Present"
            title="Lead Developer at Mystica"
            companyName="Tricky Djinn LLC"
            imgSrc="https://mystica.cloud/logo.png"
            stats={[
              { name: "ReactNative", level: 90 },
              { name: "PostgreSQL", level: 75 },
              { name: "Redis", level: 70 },
              { name: "Spring", level: 90 },
            ]}
            description={
              <p>
                I co-founded a startup thats building a geo-RPG,{" "}
                <strong>powered by AI</strong>. I am{" "}
                <strong>acting as the CTO and lead developer</strong> on our
                team of five. Learn more at{" "}
                <a href="https://mystica.cloud">mystica.cloud</a>. We're
                building a new kind of game that uses AI to run fantasy text
                adventures based on your location.
              </p>
            }
            readMoreText={
              <div className="columns">
                <p>
                  Mystica is an AI-powered, text-based adventure game. In it,
                  you wander the real world, going to real locations, and fight
                  fantasy creatures. However, unlike other games that blend game
                  and reality, we don't use AR—instead, we focus on the combat
                  experience itself, aiming to replicate text adventures and
                  tabletop roleplaying games. In Mystica, you are met with a
                  situation and are tasked with overcoming whatever challenge it
                  presents by describing the choices you make. The AI responds,
                  and that's how the game plays out.
                </p>
                <p>
                  From a technical standpoint, this is quite challenging.
                  Despite the “magic” of AI, we're asking a lot of it—we're
                  asking it to act as a game engine. At Tricky Djinn, I was
                  tasked with designing and implementing the fundamental game
                  loop interaction between player and AI. Rather than building
                  our own AI from scratch, I decided to use an LLM API. However,
                  LLMs return text, not data, and are trained to behave like
                  chat bots, not game engines. Initially, I solved this by using
                  a sequence of prompts where each step wraps user content in
                  specific instructions on processing and output-format, spits
                  out some xml, and then gets repeated until the steps are
                  completed. Finally, it'll spit out its response for the
                  outcome, along with a bunch of meta data for affecting user
                  health and the state of the encounter. This, I believe, is
                  also partially how Open AI's newest strawberry model works.
                </p>
                <p>
                  This process worked great, however it can be improved. It's
                  expensive to use a big model (it was required for the
                  complexity of outputs we were asking of it), and we were using
                  a lot of tokens. However, I realized that we could use the
                  larger model with all of the massive, hyper-engineered prompts
                  to create training data for a smaller model. The smaller model
                  wouldn't need instructions on what to do, nor would it need
                  instructions on output formatting. With a few iterations, I
                  built our training data and fine tuned a smaller LLM model.
                  Despite fine-tuned models costing more, this new process
                  reduced our input token-count by over 50%, saving us 30% on
                  our projected operating costs.
                </p>
              </div>
            }
          >
            <ul>
              <li>
                Designed and implemented system that{" "}
                <b>integrates text-based LLM models with the game engine</b>.
                Enables never-before-seen videogame mechanics and storytelling.
              </li>
              <li>
                Set up multiplayer using websocket connections and Redis
                "sessions", <b>balancing lightning fast communication</b>{" "}
                between players with a <b>scalable backend and database</b>.
              </li>
              <li>
                Set up <b>multiple environments</b> for development, testing,
                and live, with <b>effortless deployment</b> for each.
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Mar 2023 - Jul 2024"
            title="Founder of Co-GM"
            companyName="Rhyneer Consulting LLC"
            imgSrc="https://cogmprod.blob.core.windows.net/main/images/landing%20page/computer-session.png"
            description={
              <p>
                I built a powerful wiki tool for storytellers. Check it out at{" "}
                <a href="https://cogm.tech">cogm.tech</a>.{" "}
                <strong>1500+ users, 50+ paying subscribers</strong>, and still
                growing. I did everything from UI/UX design to system
                architecting to marketing to customer service.
              </p>
            }
            stats={[
              { name: "JavaScript", level: 90 },
              { name: "Express", level: 80 },
              { name: "Node", level: 75 },
              { name: "Azure App Services", level: 70 },
              { name: "CSS", level: 85 },
              { name: "MongoDB", level: 80 },
            ]}
            readMoreText={
              <div className="columns">
                <p>
                  Co-GM is an online note taking tool that I built specifically
                  to help GMs (the people who run games of Dungeons and Dragons)
                  keep their ideas organized and their head in the game rather
                  than in their screens. It's a niche tool, but since the
                  project's beginnings I've garnered nearly 1,500 users and over
                  50 paying monthly subscribers. Besides notes, the tool
                  incorporates a large array of other tools critical to any GM's
                  toolbox, and integrates all of them. Notes link together, but
                  you can also link to things that aren't notes to create other
                  effects, like automatically rolling dice or generating random
                  content. You can share libraries of notes with other users,
                  and you can publish your work on a shared workshop to allow
                  other users to find tools they'd find useful for themselves.
                </p>
                <p>
                  To build this tool, I taught myself almost everything. It's
                  built on a React frontend, it's got a TypeScript Node backend,
                  and all the data is stored in MongoDB. The app is set up with
                  CI/CD via GitHub actions, and deploys automatically to staging
                  environments in Azure App services. From there, I can perform
                  further testing and release to users. In addition to all of
                  the languages and frameworks used, I overcame the following
                  technical challenges:
                </p>
                <ul>
                  <li>
                    I built the security from scratch, enabling a system where
                    users can share content with each other but not edit each
                    other's work.
                  </li>
                  <li>
                    I designed and implemented nuanced and complex
                    note-relationship patterns. For example, typing out a date
                    in a note makes the note automatically show up in a fantasy
                    (non-gregorian) calendar.
                  </li>
                  <li>
                    I implemented a rich rich text editor in the browser, and
                    then extended it to enable custom elements and behaviors.
                  </li>
                </ul>
                <p>
                  Building and growing Co-GM required a lot of additional softer
                  skills. I made the creatives and ran an ad campaign on Reddit
                  with comments turned on, meaning I was regularly interacting
                  directly with my potential consumers. I was Customer Support
                  as well, meaning I was directly helping those consumers
                  troubleshoot their issues (it also made me much more concerned
                  about the quality of logging in prod, the importance of
                  backups, and how to do smooth feature rollouts). And lastly,
                  for a few months of the project, I managed to convince someone
                  else to work on the project with me. I onboarded them, and
                  during that time acted as a mentor, teaching them the work
                  cycle of the project and helping them find easier but still
                  meaningful tasks to work on.
                </p>
              </div>
            }
          >
            <ul>
              <li>
                <b>Solo-developed</b> a web app. Designed, architected,
                programmed, and maintained by me.
              </li>
              <li>
                App includes a custom-built <b>active directory</b>, complex{" "}
                <b>wiki functionalities</b>, a <b>shareable marketplace</b>{" "}
                where users can subscribe to and rate other users' content, and
                a <b>paid subscription</b> option, among other features.
              </li>
              <li>
                Ran ad campaign that saw a{" "}
                <b>1% CTR and 30% landing page conversion rate.</b>
              </li>
              <li>
                <b>Automated E2E testing and CI/CD</b>.
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Sep 2021 - Sep 2022"
            title="Game Developer"
            companyName="Independent"
            imgSrc={unityLogo}
            stats={[
              { name: "C#", level: 85 },
              { name: "OOP Principles", level: 97 },
              { name: "Unity", level: 80 },
            ]}
            description={
              <p>
                In partnership with another developer, I developed{" "}
                <a href="https://www.kickstarter.com/projects/1863228575/tell-your-tale?ref=discovery&term=Tell%20Your%20Tale&total_hits=16&category_id=35">
                  Tell Your Tale
                </a>
                , a multiplayer, 3D RPG, from the ground up.{" "}
                <strong>
                  Advanced OOP, lots of design patterns, and concurrency/race
                  conditions
                </strong>
                —it was a glorious mess.
              </p>
            }
          >
            <ul>
              <li>
                Developed a <b>multiplayer</b>, RPG game with{" "}
                <b>over 20,000 lines of C# code</b>, using industry standard
                tools.
              </li>
              <li>
                Implemented <b>procedural terrain algorithms</b>, combat systems
                and physics for a 3D environment,{" "}
                <b>integration with the app store</b>,{" "}
                <b>multiplayer functionality</b>, and custom, internal tools for
                faster development.
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Jun 2021 - Sep 2021"
            title="AI Engineering Intern"
            companyName="Clean Energy Asociates"
            imgSrc={ceaLogo}
            stats={[
              { name: "Python", level: 90 },
              { name: "ML Libraries", level: 80 },
            ]}
            description={
              <p>
                Developed machine vision algorithms for processing and flagging
                images of solar panels.
              </p>
            }
          >
            <ul>
              <li>
                Identified inefficiency in training data collection methods and
                <b>independently developed a pythong application</b> for turning
                images into usable training data, saving the company 25 hours of
                work per week (<b>500%+ increase in efficiency</b>). I hate
                inefficiency.
              </li>
              <li>
                Implemented convolutional neural networks for image processing
                using <b>TensorFlow</b> and <b>Keras</b>. Achieved perfect
                accuracy in drawing bounding boxes around solar panel cells.
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Sep 2018 - Sep 2022"
            title="Computer Science Student"
            companyName="Carleton College"
            imgSrc={carletonLogo}
            stats={[
              { name: "Python", level: 90 },
              { name: "ML Libraries", level: 80 },
              { name: "C", level: 60 },
            ]}
            description={
              <p>
                While at Carleton, I focused on AI and machine learning. For my
                capstone AI project{" "}
                <strong>
                  I received distinction for exceptional work among CS graduates
                </strong>
                .
              </p>
            }
          >
            <ul>
              <li>
                <strong>Reddit AI</strong>: Built a Reddit bot trained with
                transformers and a <b>novel "pass-through" technique</b> to
                generate comments.{" "}
                <b>
                  College awarded me distinction for exceptional work in major.
                </b>
              </li>
              <li>
                <strong>AI Stock market analysis</strong>: Made tool that uses
                machine learning to predict stock prices.{" "}
                <b>Found statistically significant results.</b>
              </li>
            </ul>
          </TimelineBlock>
          <TimelineEnd />
        </div>
      </div>
    </>
  );
}

export default App;
/* <h2>Why can I crush this job?</h2>
        <p>List common job requirements, and why I nail them</p>*/

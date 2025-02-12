/* eslint-disable react/no-unescaped-entities */
import "primeicons/primeicons.css";
import { useTypewriter } from "sr-quick";
import "./App.css";
import carletonLogo from "./assets/carleton.png";
import ceaLogo from "./assets/cea.png";
import compozeLogo from "./assets/compoze.png";
import concordLogo from "./assets/concord.jpeg";
import profile from "./assets/main2.png";
import odaptLogo from "./assets/odapt.png";
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
        <p className="app__subheader">
          Software developer who never learned when to stop building. My{" "}
          <a
            href="https://github.com/CaptainCrouton89"
            target="_blank"
            rel="noopener noreferrer"
          >
            repositories
          </a>{" "}
          multiply like rabbits, my side projects have side projects, and my D&D
          campaigns come with their own{" "}
          <a href="https://cogm.tech" target="_blank" rel="noopener noreferrer">
            custom-built digital platforms
          </a>
          . Haven't met a technical challenge yet that outlasts my ability to
          forget what time it is.
        </p>
        <h4>Here's what I've been up to...</h4>
      </div>
      <div className="app__body">
        <div className="app__timeline">
          <h2>Timeline</h2>
          <TimelineStart />
          <TimelineBlock
            dateString="Feb 2025 - Present"
            title="Cofounder"
            location={"Minneapolis, MN"}
            companyName="Odapt"
            imgSrc={odaptLogo}
            stats={[
              { name: "System Architecture", level: 70 },
              { name: "AI Integration", level: 80 },
              { name: "Start-uppy stuff :)", level: 90 },
            ]}
            description={
              <p>
                Check out the website at <a href="https://odapt.ai">odapt.ai</a>
                . Odapt lets you build web apps with plain english.{" "}
                <strong>From idea to deployment in minutes</strong>.
              </p>
            }
          >
            <ul>
              <li>
                <b>Migrated entire frontend</b> from raw html/js to React.
              </li>
              <li>
                Will be adding more here soon, but I'm too busy building to
                write :)
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Jan 2025 - Feb 2025"
            title="AI Engineer"
            location={"Minneapolis, MN"}
            companyName="CompozeLabs"
            imgSrc={compozeLogo}
            stats={[
              { name: "AI Integration", level: 75 },
              { name: "NextJS", level: 80 },
              { name: "AWS", level: 60 },
              { name: "AI Framework Design", level: 70 },
            ]}
            description={
              <p>
                I solo-stood up a{" "}
                <strong>voice-interactive sales-coaching tool</strong>. Using a
                novel architecture that uses multiple LLMs to analyze a
                conversation in real time, I was able to build a tool where{" "}
                <strong>
                  a user can practice real-time sales pitches against a voice AI
                  modeled on a real person.
                </strong>{" "}
                The AI can ask questions, respond to the user, and provide
                feedback on the user's performance.
              </p>
            }
          >
            <ul>
              <li>
                POV was estimated to take 4-6 weeks, <b>I did it in one</b>.
              </li>
              <li>
                <b>Designed and implemented</b> a novel "thinker" architecture.{" "}
                <b>Integrates multiple LLMs</b> to analyze a conversation in
                real time and gave feedback to the voice model,{" "}
                <b>enabling higher performance</b>.
              </li>
              <li>
                Worked closely with client to <b>refine product</b>,{" "}
                <b>manage project scope and priorities</b> and{" "}
                <b>rapidly iterate on the product to meet client needs</b>.
              </li>
              <li>
                Had the term <b>"silas velocity"</b> coined by colleagues,
                referring to the speed at which I develop quality code.
              </li>
            </ul>
          </TimelineBlock>
          <TimelineConnector />
          <TimelineBlock
            dateString="Aug 2022 - Dec 2024"
            title="Consultant"
            location={"Minneapolis, MN"}
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
                I did technical consulting. This meant{" "}
                <strong>
                  diagnosing and solving problems for a client before they knew
                  they had them.
                </strong>{" "}
                I helped refine product needs, coordinated resources across
                teams to solve solutions quickly, and architected new solutions.
                One part professional communicator, one part software engineer,
                and a little bit of everything else.
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
            dateString="Aug 2024 - Dec 2024"
            title="Lead Developer at Mystica"
            location={"Minneapolis, MN"}
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
            location={"Minneapolis, MN"}
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
            location={"Claremont, CA"}
            companyName="Independent"
            imgSrc={unityLogo}
            stats={[
              { name: "C#", level: 85 },
              { name: "OOP Principles", level: 97 },
              { name: "Unity", level: 80 },
            ]}
            description={
              <p>
                In partnership with another developer, I developed a
                multiplayer, 3D RPG from the ground up.{" "}
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
            location={"Boulder, CO"}
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
            location={"Northfield, MN"}
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

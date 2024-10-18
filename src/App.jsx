/* eslint-disable react/no-unescaped-entities */
import "primeicons/primeicons.css";
import { useTypewriter } from "sr-quick";
import "./App.css";
import concordLogo from "./assets/concord.jpeg";
import reactLogo from "./assets/main2.png";
import TimelineConnector from "./components/Connectors/TimelineConnector";
import TimelineEnd from "./components/Connectors/TimelineEnd";
import TimelineStart from "./components/Connectors/TimelineStart";
import TimelineBlock from "./components/TimelineBlock";

function App() {
  const imSilasText = useTypewriter("I'm Silas", 100, 1000);

  return (
    <>
      <div className="app__header">
        <img src={reactLogo} className="profile" alt="profile picture" />
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
            imgSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F11%2FUnity-Emblem.png&sp=1729210159T8e84f57d096daa9a3306536df3abeee84210c63a81e5b062aeaeb8af899a549c"
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
            companyName="Clean Energy Asociates"
            imgSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._AtuIFHqkhrF5qnf4XBObQAAAA%26pid%3DApi&sp=1729208222T95471b9f3063c29b2c370fe2ddcad8989ac165a6d89cf311b58529c5a52fccc3"
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
            imgSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X4jUEd9r9SosSJO_A73UiQHaHa%26pid%3DApi&sp=1729207748T2a2ab5060e5cfcbc0d29c6c408fe839b963e55900499b5bb13af1d0653bbae81"
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

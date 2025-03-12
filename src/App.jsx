/* eslint-disable react/no-unescaped-entities */
import "primeicons/primeicons.css";
import { useTypewriter } from "sr-quick";
import profile from "./assets/main2.png";
import Timeline from "./components/Timeline";
import { timelineData } from "./data/timelineData";

function App() {
  const imSilasText = useTypewriter("I'm Silas", 100, 1000);

  return (
    <>
      <div className="mt-24 px-[20%]">
        <img
          src={profile}
          className="rounded-full w-52 h-52 mx-auto mb-6 object-cover"
          alt="profile picture"
        />
        <div className="flex justify-center mb-12 text-[rgb(98,98,98)]">
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
        <p className="text-lg text-gray-200 mb-6">
          I'm a software developer who never learned when to stop building. My{" "}
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
        <Timeline timelineData={timelineData} />
      </div>
    </>
  );
}

export default App;

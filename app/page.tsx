/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useTypewriter } from "sr-quick";
import profile from "./assets/main2.png";
import Timeline from "./components/Timeline";
import { timelineData } from "./data/timelineData";
import ChatSection from "./components/ChatSection";

export default function Home() {
  const imSilasText = useTypewriter("I'm Silas", 100, 1000);

  return (
    <>
      <div className="mt-24">
        <Image
          src={profile}
          className="rounded-full w-52 h-52 mx-auto mb-6 object-cover"
          alt="profile picture"
          width={208}
          height={208}
        />
        <div className="flex  justify-center mb-12 text-[rgb(98,98,98)]">
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
        
        <ChatSection />
        
        <h4>Here's what I've been up to...</h4>
      </div>
      <div className="app__body">
        <Timeline timelineData={timelineData} />
      </div>
    </>
  );
}

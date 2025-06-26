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
      <header className="mt-24">
        <Image
          src={profile}
          className="rounded-full w-52 h-52 mx-auto mb-6 object-cover"
          alt="Silas Rhyneer - Software Developer profile photo"
          width={208}
          height={208}
          priority
        />
        <nav className="flex justify-center mb-12 text-[rgb(98,98,98)]" aria-label="Social media links">
          <i
            className="pi pi-send"
            onClick={() =>
              window.open(
                "mailto:rhyneer.silas@gmail.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            role="button"
            tabIndex={0}
            aria-label="Send email to Silas Rhyneer"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(
                  "mailto:rhyneer.silas@gmail.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
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
            role="button"
            tabIndex={0}
            aria-label="View Silas Rhyneer's LinkedIn profile"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(
                  "https://www.linkedin.com/in/silas-rhyneer/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
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
            role="button"
            tabIndex={0}
            aria-label="View Silas Rhyneer's GitHub profile"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(
                  "https://github.com/CaptainCrouton89",
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
          />
        </nav>
        <h1>
          Hi! <strong>{imSilasText}</strong>
        </h1>
      </header>
      
      <section>
        <ChatSection />
      </section>
      
      <section>
        <h2>Here's what I've been up to...</h2>
        <div className="app__body">
          <Timeline timelineData={timelineData} />
        </div>
      </section>
    </>
  );
}

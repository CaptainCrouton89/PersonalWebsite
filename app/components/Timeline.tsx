import React from "react";
import TimelineConnector from "./Connectors/TimelineConnector";
import TimelineEnd from "./Connectors/TimelineEnd";
import TimelineStart from "./Connectors/TimelineStart";
import TimelineBlock from "./TimelineBlock";
import type { TimelineData } from "../types/timeline";

interface TimelineProps {
  timelineData: TimelineData;
}

export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <div className="app__timeline">
      <h2 className="text-2xl font-bold mt-4">Timeline</h2>
      <TimelineStart />

      {timelineData.map((entry, index) => (
        <div key={entry.id}>
          <TimelineBlock
            dateString={entry.dateString}
            title={entry.title}
            location={entry.location}
            companyName={entry.companyName}
            imgSrc={entry.imgSrc}
            stats={entry.stats}
            description={entry.description}
            readMoreText={entry.readMoreText}
          >
            <ul className="ml-5" style={{ listStyleType: "disc" }}>
              {entry.bullets.map((bullet, index) =>
                React.isValidElement(bullet) 
                  ? React.cloneElement(bullet as React.ReactElement<any>, {
                      key: index,
                      style: {
                        ...(bullet.props && (bullet.props as any).style
                          ? (bullet.props as any).style
                          : {}),
                        listStyleType: "disc",
                        marginLeft: "1rem",
                      },
                    } as any)
                  : bullet
              )}
            </ul>
          </TimelineBlock>

          {index < timelineData.length - 1 && <TimelineConnector />}
        </div>
      ))}

      <TimelineEnd />
    </div>
  );
}


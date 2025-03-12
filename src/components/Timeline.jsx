import PropTypes from "prop-types";
import React from "react";
import TimelineConnector from "./Connectors/TimelineConnector";
import TimelineEnd from "./Connectors/TimelineEnd";
import TimelineStart from "./Connectors/TimelineStart";
import TimelineBlock from "./TimelineBlock";

/**
 * Timeline component that renders a timeline of events
 * @param {Object} props - Component props
 * @param {Array} props.timelineData - Array of timeline entry objects
 * @returns {JSX.Element} - Rendered component
 */
export default function Timeline({ timelineData }) {
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
              {entry.bullets.map((bullet) =>
                React.cloneElement(bullet, {
                  style: {
                    ...(bullet.props && bullet.props.style
                      ? bullet.props.style
                      : {}),
                    listStyleType: "disc",
                    marginLeft: "1rem",
                  },
                })
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

Timeline.propTypes = {
  timelineData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      dateString: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
        })
      ).isRequired,
      description: PropTypes.node.isRequired,
      readMoreText: PropTypes.node,
      bullets: PropTypes.arrayOf(PropTypes.node).isRequired,
    })
  ).isRequired,
};

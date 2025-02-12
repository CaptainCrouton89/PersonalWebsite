import PropTypes, { object } from "prop-types";
import { useState } from "react";
import "./TimelineBlock.css";

export default function TimelineBlock({
  dateString,
  location,
  companyName,
  title,
  imgSrc,
  description,
  showStatsDefault = true,
  children,
  readMoreText,
  stats = [],
}) {
  const [readMore, setReadMore] = useState(false);
  const [showStats, setShowStats] = useState(showStatsDefault);

  return (
    <div className="timeline-block">
      <h3>{title}</h3>
      <h4>{companyName}</h4>
      <div className="timeline-block__location">{location}</div>
      <div className="timeline-block__date">{dateString}</div>
      {readMore ? (
        <div className="read-more-container">
          {readMoreText}
          <div className="read-more" onClick={() => setReadMore(false)}>
            Read less
          </div>
        </div>
      ) : (
        <div className="timeline-block__container">
          <div className="timeline-block__left">
            <img src={imgSrc} />
          </div>
          <div className="timeline-block__right timeline-block__text">
            {description}
            <div className="timeline-block__toggle">
              <button
                onClick={() => setShowStats(true)}
                className={showStats ? "toggle active" : "toggle"}
              >
                Skills
              </button>
              <button
                onClick={() => setShowStats(false)}
                className={!showStats ? "toggle active" : "toggle"}
              >
                Details
              </button>
            </div>
            <div className="timeline-block__body">
              {showStats ? <SkillStats stats={stats} /> : children}
            </div>
            {!showStats && readMoreText && (
              <div className="read-more" onClick={() => setReadMore(true)}>
                Read more
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SkillStats({ stats }) {
  return (
    <div className="timeline-block__stats">
      {stats.map((stat, index) => (
        <div className="stat-line" key={index}>
          <div className="skill-name">{stat.name}</div>
          <SkillBar level={stat.level} />
        </div>
      ))}
    </div>
  );
}

function SkillBar({ level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__fill" style={{ width: `${level}%` }}></div>
    </div>
  );
}

TimelineBlock.propTypes = {
  dateString: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  showStatsDefault: PropTypes.bool,
  children: PropTypes.node.isRequired,
  readMoreText: PropTypes.node,
  stats: PropTypes.arrayOf(object).isRequired,
};

SkillStats.propTypes = {
  stats: PropTypes.arrayOf(object).isRequired,
};

SkillBar.propTypes = {
  level: PropTypes.number.isRequired,
};

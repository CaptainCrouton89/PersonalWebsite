import PropTypes from "prop-types";
import { useState } from "react";

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

  console.log(showStatsDefault);

  return (
    <div className="text-left rounded-lg p-8 md:p-12 md:pb-20 bg-card shadow-md">
      <h3 className="text-2xl md:text-4xl mt-4 font-normal text-white">
        {title}
      </h3>
      <h4 className="mt-6">{companyName}</h4>
      <div className="font-light text-sm mb-2 text-foreground">{location}</div>
      <div className="font-light">{dateString}</div>
      {readMore ? (
        <div className="mt-4">
          {readMoreText}
          <div
            className="text-primary underline cursor-pointer hover:text-hover"
            onClick={() => setReadMore(false)}
          >
            Read less
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 md:mt-4">
          <div className="md:flex-1 min-h-0 md:min-h-[300px]">
            <img
              src={imgSrc}
              className="rounded-lg w-full mx-auto object-cover mt-4"
            />
          </div>
          <div className="md:flex-2">
            {description}
            <div className="my-4 flex justify-center items-center">
              <button
                onClick={() => setShowStats(true)}
                className={`border border-primary py-2 px-4 font-medium cursor-pointer transition-colors duration-500 rounded-none rounded-l-lg ${
                  showStats ? "bg-primary text-background" : "text-primary"
                } focus:outline-none`}
              >
                Skills
              </button>
              <button
                onClick={() => setShowStats(false)}
                className={`border border-primary py-2 px-4 font-medium cursor-pointer transition-colors duration-500 rounded-none rounded-r-lg ${
                  !showStats ? "bg-primary text-background" : "text-primary"
                } focus:outline-none`}
              >
                Details
              </button>
            </div>
            <div>{showStats ? <SkillStats stats={stats} /> : children}</div>
            {!showStats && readMoreText && (
              <div
                className="text-primary underline cursor-pointer hover:text-hover"
                onClick={() => setReadMore(true)}
              >
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
    <div>
      {stats.map((stat, index) => (
        <div className="mt-2" key={index}>
          <div className="font-medium">{stat.name}</div>
          <SkillBar level={stat.level} />
        </div>
      ))}
    </div>
  );
}

function SkillBar({ level }) {
  return (
    <div className="rounded-md h-[7px] bg-background relative">
      <div
        className="rounded-md absolute top-0 left-0 h-full bg-primary"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );
}

TimelineBlock.propTypes = {
  dateString: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  showStatsDefault: PropTypes.bool,
  children: PropTypes.node.isRequired,
  readMoreText: PropTypes.node,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SkillStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SkillBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default function TimelineEnd() {
  return (
    <div>
      <div className="timeline-connector timeline-end"></div>
      <div
        className="timeline-end__ball"
        onClick={() => window.open("mailto:rhyneer.silas@gmail.com")}
      >
        <p>Contact</p>
        <p>Me</p>
      </div>
    </div>
  );
}

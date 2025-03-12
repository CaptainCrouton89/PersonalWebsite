export default function TimelineEnd() {
  return (
    <div>
      <div className="h-32 w-0.5 bg-primary mx-auto mt-4"></div>
      <div
        className="bg-primary w-[140px] h-[140px] rounded-full mx-auto mb-[25vh] flex flex-col justify-center text-2xl cursor-pointer transition-all duration-500 hover:bg-hover hover:scale-110"
        onClick={() => window.open("mailto:rhyneer.silas@gmail.com")}
      >
        <p className="text-center font-bold">Contact</p>
        <p className="text-center font-bold">Me</p>
      </div>
    </div>
  );
}

import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          SWOL<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">unbelievably fit</span> and
        accept all risks of becoming a local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <button className="px-8 py-4 rounded-medium border-blue-400 border-solid border-[2px] bg-slate-950 blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}

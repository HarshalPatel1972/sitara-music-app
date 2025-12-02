import React from "react";
import Visualizer from "../Visualizer";


const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? "animate-spin-slow animate-particle" : ""
      } hidden sm:block h-20 w-20 mr-6 relative group`}
    >

      <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
      <img
        src={activeSong?.attributes?.artwork?.url
          .replace("{w}", "125")
          .replace("{h}", "125")}
        alt="cover art"
        className="rounded-full p-1 shadow-2xl"
      />
    </div>
    <div className="w-[50%] flex flex-col">
      <div className="flex items-center gap-3">
        <p className="truncate text-white font-black text-xl tracking-tighter text-glow italic">
          {activeSong?.attributes?.name || "No active Song"}
        </p>
        {isPlaying && <Visualizer isPlaying={isPlaying} />}
      </div>
      <p className="truncate text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mt-1">
        {activeSong?.attributes?.artistName || "No Artist"}
      </p>
    </div>


  </div>
);

export default Track;

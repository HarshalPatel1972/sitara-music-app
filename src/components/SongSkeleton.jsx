import React from "react";

const SongSkeleton = () => (
  <div className="flex flex-col w-[250px] p-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl animate-pulse">
    <div className="relative w-full h-56 bg-slate-800 rounded-xl" />
    <div className="mt-5 flex flex-col space-y-3">
      <div className="h-4 bg-slate-800 rounded w-3/4" />
      <div className="h-3 bg-slate-800 rounded w-1/2" />
    </div>
  </div>
);

export default SongSkeleton;

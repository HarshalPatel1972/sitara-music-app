import React from "react";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col min-h-[50vh]">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
      <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <div className="absolute inset-4 border-4 border-secondary/20 rounded-full" />
      <div className="absolute inset-4 border-4 border-secondary border-b-transparent rounded-full animate-spin-slow" />
    </div>
    <h1 className="font-black text-xs uppercase tracking-[0.4em] text-slate-500 mt-8 animate-pulse">
      {title || "Orchestrating..."}
    </h1>
  </div>
);

export default Loader;

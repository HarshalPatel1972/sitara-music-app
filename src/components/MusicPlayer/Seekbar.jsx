// src/components/MusicPlayer/Seekbar.jsx

import React from "react";

const Seekbar = ({ value, min, max, onInput, onChange }) => {
  // Helper function to format time in M:SS format
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center gap-4 w-full px-4">
      <p className="text-slate-500 font-mono text-[10px] w-8 text-right">
        {value === 0 ? "0:00" : getTime(value)}
      </p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        onChange={onChange}
        className="flex-1 h-1 rounded-full appearance-none cursor-pointer bg-slate-800 accent-primary"
        style={{
          background: `linear-gradient(to right, #8b5cf6 0%, #ec4899 ${(value / max) * 100}%, #1e293b ${(value / max) * 100}%)`,
        }}
      />
      <p className="text-slate-500 font-mono text-[10px] w-8">
        {max === 0 ? "0:00" : getTime(max)}
      </p>
    </div>

  );
};

export default Seekbar;

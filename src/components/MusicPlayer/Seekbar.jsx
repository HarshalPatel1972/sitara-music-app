// src/components/MusicPlayer/Seekbar.jsx

import React from "react";

const Seekbar = ({ value, min, max, onInput, onChange }) => {
  // Helper function to format time in M:SS format
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        onChange={onChange} // Add this to handle seeking
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #8b5cf6 ${
            (value / max) * 100
          }%, #4b5563 ${(value / max) * 100}%)`,
        }}
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;

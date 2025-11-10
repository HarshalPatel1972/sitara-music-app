// src/components/MusicPlayer/Controls.jsx
import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

// We need to install react-icons first! Run: npm install react-icons
const Controls = ({
  isPlaying,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <MdSkipPrevious
      size={24}
      className="cursor-pointer text-slate-400 hover:text-white transition-colors"
      onClick={handlePrevSong}
    />
    {isPlaying ? (
      <div className="bg-primary/20 p-3 rounded-full border border-primary/40 hover:bg-primary/30 transition-all cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.2)]" onClick={handlePlayPause}>
        <BsFillPauseFill
          size={35}
          className="text-white"
        />
      </div>
    ) : (
      <div className="bg-primary p-3 rounded-full hover:scale-110 transition-all cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.4)]" onClick={handlePlayPause}>
        <BsFillPlayFill
          size={35}
          className="text-white"
        />
      </div>
    )}
    <MdSkipNext
      size={24}
      className="cursor-pointer text-slate-400 hover:text-white transition-colors"
      onClick={handleNextSong}
    />
  </div>

);

export default Controls;

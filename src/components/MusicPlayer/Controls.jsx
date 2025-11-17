// src/components/MusicPlayer/Controls.jsx
import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPlayFill, BsFillPauseFill, BsShuffle, BsArrowRepeat } from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-44 lg:w-64 2xl:w-96">
    <BsArrowRepeat
      size={20}
      color={repeat ? "#8b5cf6" : "#475569"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer transition-colors"
    />
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
    <BsShuffle
      size={20}
      color={shuffle ? "#8b5cf6" : "#475569"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer transition-colors"
    />
  </div>


);

export default Controls;

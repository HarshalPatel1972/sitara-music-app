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
      size={30}
      color="#FFF"
      className="cursor-pointer"
      onClick={handlePrevSong}
    />
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    <MdSkipNext
      size={30}
      color="#FFF"
      className="cursor-pointer"
      onClick={handleNextSong}
    />
  </div>
);

export default Controls;

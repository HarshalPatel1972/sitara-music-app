// src/components/MusicPlayer/index.jsx

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  playPause,
  nextSong,
  prevSong,
} from "../../redux/features/playerSlice";
import Controls from "./Controls";
import Seekbar from "./Seekbar";
import Track from "./Track";

const MusicPlayer = () => {
  const { activeSong, isPlaying, currentIndex, currentSongs } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const audioRef = useRef(null);

  // --- THE MOST IMPORTANT DEBUG LOG ---
  // This will show us the entire structure of the song object we are receiving from Redux.
  console.log(
    "%c FULL activeSong OBJECT:",
    "color: yellow; font-weight: bold;",
    activeSong
  );

  const audioSrc = activeSong?.hub?.actions?.[1]?.uri;

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.error("Audio Playback Error:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioSrc]);

  const handlePlayPause = () => {
    if (!activeSong?.hub) return;
    dispatch(playPause(!isPlaying));
  };

  const handleNextSong = () => {
    if (currentSongs.length) {
      const nextIndex = (currentIndex + 1) % currentSongs.length;
      dispatch(nextSong(nextIndex));
    }
  };

  const handlePrevSong = () => {
    if (currentSongs.length) {
      const prevIndex =
        currentIndex === 0 ? currentSongs.length - 1 : currentIndex - 1;
      dispatch(prevSong(prevIndex));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        isPlaying={isPlaying}
        isActive={isPlaying}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) =>
            (audioRef.current.currentTime = event.target.value)
          }
          appTime={appTime}
        />
        <audio
          ref={audioRef}
          src={audioSrc}
          onLoadedData={(event) => setDuration(event.target.duration)}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onEnded={handleNextSong}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;

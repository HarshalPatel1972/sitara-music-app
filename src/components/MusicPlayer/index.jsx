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
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const { activeSong, isPlaying, currentIndex, currentSongs } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = activeSong?.hub?.actions?.[1]?.uri;


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
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
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
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
          loop={repeat}
          onLoadedData={(event) => setDuration(event.target.duration)}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onEnded={handleNextSong}
        />
      </div>

      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>

  );
};

export default MusicPlayer;

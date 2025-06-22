// src/components/SongCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, data }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    // --- DEBUG LOG 1 ---
    console.log("1. [SongCard] Clicked. Dispatching setActiveSong.");
    dispatch(setActiveSong({ song, data, i }));
  };

  const attr = song.attributes || {};
  const artworkUrl = attr.artwork?.url
    ?.replace("{w}", "400")
    .replace("{h}", "400");

  return (
    <div className="flex flex-col w-[250px] p-4 bg-primary bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex hidden"
          onClick={handlePlayClick}
        >
          <BsFillPlayFill size={50} className="text-gray-300" />
        </div>
        <img
          src={artworkUrl || "https://via.placeholder.com/400?text=No+Image"}
          alt="song_img"
          className="w-full h-full rounded-lg"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=No+Image";
          }}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-text-primary truncate">
          {attr.name || "Unknown Title"}
        </p>
        <p className="text-sm truncate text-text-secondary mt-1">
          {attr.artistName || "Unknown Artist"}
        </p>
      </div>
    </div>
  );
};

export default SongCard;

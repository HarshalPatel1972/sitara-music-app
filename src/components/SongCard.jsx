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
    <div className="flex flex-col w-[250px] p-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 animate-slideup rounded-2xl cursor-pointer hover:bg-slate-800/60 hover:scale-[1.02] transition-all duration-300 group shadow-2xl">
      <div className="relative w-full h-56">
        <div
          className="absolute inset-0 z-10 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          onClick={handlePlayClick}
        >
          <div className="bg-primary p-3 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]">
            <BsFillPlayFill size={30} className="text-white" />
          </div>
        </div>
        <img
          src={artworkUrl || "https://via.placeholder.com/400?text=No+Image"}
          alt="song_img"
          className="w-full h-full rounded-xl object-cover shadow-lg"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=No+Image";
          }}
        />
      </div>
      <div className="mt-5 flex flex-col">
        <p className="font-black text-lg text-white truncate tracking-tight">
          {attr.name || "Unknown Title"}
        </p>
        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mt-1 truncate">
          {attr.artistName || "Unknown Artist"}
        </p>
      </div>
    </div>
  );

};

export default SongCard;

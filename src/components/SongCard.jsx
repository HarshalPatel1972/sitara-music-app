// src/components/SongCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { FiShare2, FiMoreHorizontal } from "react-icons/fi";
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
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="p-2 bg-slate-900/60 backdrop-blur-md rounded-lg hover:bg-slate-800 border border-white/5 transition-all">
              <FiShare2 size={14} className="text-white" />
            </div>
            <div className="p-2 bg-slate-900/60 backdrop-blur-md rounded-lg hover:bg-slate-800 border border-white/5 transition-all">
              <FiMoreHorizontal size={14} className="text-white" />
            </div>
          </div>
          <div className="bg-primary p-4 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 transition-all">
            <BsFillPlayFill size={25} className="text-white ml-0.5" />
          </div>
        </div>

        <img
          src={artworkUrl || "https://via.placeholder.com/400?text=No+Image"}
          alt="song_img"
          loading="lazy"
          className="w-full h-full rounded-xl object-cover shadow-lg transition-all duration-700 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=No+Image";
          }}
        />
      </div>
      <div className="mt-5 flex flex-col space-y-1">
        <p className="font-black text-xl text-white truncate tracking-tighter leading-tight italic text-glow">
          {attr.name || "Unknown Title"}
        </p>
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500 truncate">
          {attr.artistName || "Unknown Artist"}
        </p>
      </div>

    </div>
  );

};

export default SongCard;

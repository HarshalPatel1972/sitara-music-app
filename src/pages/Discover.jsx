// src/pages/Discover.jsx
import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Syncing with the charts..." />;
  if (error) return <Error />;
  if (!data || data.length === 0) return (
    <div className="w-full flex justify-center items-center min-h-[50vh]">
      <h1 className="font-black text-xl text-slate-500 uppercase tracking-widest italic animate-pulse">
        No tracks found in this sector.
      </h1>
    </div>
  );


  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-16">
        <div className="flex flex-col">
          <h2 className="font-black text-6xl text-white text-left tracking-tighter text-glow italic">
            Discover
          </h2>
          <div className="flex flex-wrap gap-4 mt-8">
            {['Pop', 'Rock', 'Jazz', 'Soul', 'Electronic', 'Hip-Hop'].map((genre) => (
              <button
                key={genre}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  genre === 'Pop' 
                    ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                    : 'bg-white/5 text-slate-500 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>



      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard key={song.id} song={song} i={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discover;

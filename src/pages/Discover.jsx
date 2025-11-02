// src/pages/Discover.jsx
import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import SongCard from "../components/SongCard"; // <-- IMPORT

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching)
    return <p className="text-text-secondary">Loading songs...</p>;
  if (error) return <p className="text-red-500">Error fetching songs.</p>;
  if (!data) return <p className="text-text-secondary">No songs found.</p>;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-16">
        <div className="flex flex-col">
          <h2 className="font-black text-6xl text-white text-left tracking-tighter text-glow italic">
            Discover
          </h2>
          <p className="text-slate-500 text-sm font-black uppercase tracking-[0.3em] mt-2">
            Trending in Pop
          </p>
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

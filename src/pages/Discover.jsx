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

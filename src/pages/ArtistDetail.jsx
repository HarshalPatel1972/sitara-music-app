import React from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';

const ArtistDetail = () => {
  const isFetching = false;
  const error = false;

  if (isFetching) return <Loader title="Loading Artist Profile..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-96 bg-slate-900/10 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="absolute bottom-12 left-12 z-20 flex items-end gap-10">
          <div className="w-56 h-56 rounded-3xl bg-slate-800 shadow-2xl overflow-hidden border-2 border-white/10 p-1">
             <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-slate-700 font-black text-6xl italic">AS</div>
          </div>
          <div className="flex flex-col mb-4">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tighter text-glow italic leading-[0.8]">Artist Name</h1>
            <div className="flex items-center gap-4 mt-8">
               <p className="text-primary uppercase tracking-[0.4em] text-[10px] font-black animate-pulse">Live Now</p>
               <span className="w-1 h-1 rounded-full bg-slate-800" />
               <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-black">1,245,678 Monthly Listeners</p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <h2 className="text-2xl font-black text-white mb-8 italic">Popular Tracks</h2>
          <div className="space-y-4">
             {[1,2,3,4,5].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-white/5 hover:bg-slate-900/80 border border-transparent hover:border-white/10 rounded-2xl transition-all group cursor-pointer">
                 <div className="flex items-center gap-4">
                   <span className="text-slate-600 font-black text-[10px] w-4">{i}</span>
                   <div className="relative w-12 h-12">
                     <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg z-10">
                        <div className="bg-white p-1.5 rounded-full">
                          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-primary border-b-[4px] border-b-transparent ml-0.5" />
                        </div>
                     </div>
                     <div className="w-full h-full rounded-lg bg-slate-800" />
                   </div>
                   <div>
                     <p className="text-sm font-black text-white group-hover:text-primary transition-colors">Starboy</p>
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">2,450,123 Plays</p>
                   </div>
                 </div>
                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">3:50</p>
               </div>
             ))}

          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-black text-white mb-8 italic">About</h2>
          <div className="p-8 bg-slate-950/50 border border-white/5 rounded-3xl">
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Artist biography placeholder. This will contain the history, achievements, and unique style of the artist, rendered with cinematic legibility.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-black text-white mb-8 italic">Related Artists</h2>
        <div className="flex gap-8 overflow-x-auto pb-10 custom-scrollbar">
          {['The Weeknd', 'Travis Scott', 'Future', 'Drake', 'Kanye West'].map((artist) => (
            <div key={artist} className="flex flex-col items-center min-w-[140px] group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-slate-900 border border-white/5 p-1 mb-4 group-hover:border-primary/50 transition-all group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden shadow-2xl" />
              </div>
              <p className="text-[11px] font-black text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ArtistDetail;

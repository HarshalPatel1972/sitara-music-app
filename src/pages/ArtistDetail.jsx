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
      <div className="relative w-full h-80 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <div className="absolute bottom-10 left-10 z-20 flex items-end gap-8">
          <div className="w-48 h-48 rounded-2xl bg-slate-800 shadow-2xl overflow-hidden">
            {/* Artist Image Placeholder */}
          </div>
          <div className="flex flex-col">
            <h1 className="text-8xl font-black text-white tracking-tighter text-glow italic">Artist Name</h1>
            <p className="text-slate-500 uppercase tracking-[0.4em] text-xs font-black mt-4">1.2M Monthly Listeners</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <h2 className="text-2xl font-black text-white mb-8 italic">Popular Tracks</h2>
          <div className="space-y-4">
             {[1,2,3,4,5].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group cursor-pointer">
                 <div className="flex items-center gap-4">
                   <span className="text-slate-600 font-black text-xs">{i}</span>
                   <div className="w-12 h-12 rounded-lg bg-slate-800" />
                   <p className="text-sm font-black text-white group-hover:text-primary transition-colors">Starboy</p>
                 </div>
                 <p className="text-xs font-black text-slate-500 uppercase tracking-widest">3:50</p>
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
    </div>
  );
};

export default ArtistDetail;

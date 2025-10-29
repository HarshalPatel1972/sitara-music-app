import React from 'react';
import { FiClock, FiX } from 'react-icons/fi';

const RecentSearches = () => {
  const recentItems = ['Arijit Singh', 'Late Night Lo-fi', 'Top 50 Global', 'Synthetix'];

  return (
    <div className="mt-4 p-6 bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-3xl animate-slideup">
      <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-6 flex items-center gap-2">
        <FiClock /> Recent Searches
      </h3>
      <div className="flex flex-wrap gap-3">
        {recentItems.map((item) => (
          <div key={item} className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full transition-all cursor-pointer group">
            <span className="text-xs font-black text-slate-400 group-hover:text-white transition-colors">{item}</span>
            <FiX size={12} className="text-slate-600 hover:text-red-400 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;

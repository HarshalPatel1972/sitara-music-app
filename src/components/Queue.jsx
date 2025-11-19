import React from 'react';
import { FiList, FiX } from 'react-icons/fi';

const Queue = ({ isOpen, onClose }) => {
  const queueItems = [
    { title: 'Starboy', artist: 'The Weeknd', duration: '3:50' },
    { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
    { title: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35' },
    { title: 'Die For You', artist: 'The Weeknd', duration: '4:20' },
  ];

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-background/80 backdrop-blur-3xl border-l border-white/5 z-[200] transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-2 italic">
            <FiList className="text-primary" /> Up Next
          </h3>
          <FiX className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} onClick={onClose} />
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
          {queueItems.map((item, i) => (
            <div key={i} className="p-4 bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-2xl transition-all group cursor-pointer">
              <div className="flex flex-col">
                <p className="text-xs font-black text-white group-hover:text-primary transition-colors truncate">{item.title}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-white/5">
          <button className="w-full py-4 bg-primary/10 border border-primary/20 hover:bg-primary/20 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary transition-all">
            Clear Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Queue;

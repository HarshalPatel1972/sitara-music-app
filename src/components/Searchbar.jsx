import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import RecentSearches from "./RecentSearches";

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="p-8 w-full max-w-2xl mx-auto relative group">
      <div className="flex flex-row justify-start items-center relative z-20">
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur transition-opacity duration-500 ${isFocused ? 'opacity-30' : 'opacity-0'}`} />
        <FiSearch className={`absolute left-6 transition-colors z-10 ${isFocused ? 'text-primary' : 'text-slate-500'}`} size={20} />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search for tracks, artists..."
          type="search"
          aria-label="Search tracks and artists"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full bg-slate-950/80 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-sm font-sans placeholder:text-slate-600 focus:outline-none focus:border-primary/50 backdrop-blur-xl transition-all shadow-2xl relative z-10"
        />
      </div>

      {isFocused && (
        <div className="absolute top-24 left-8 right-8 z-[150] animate-slideup">
          <RecentSearches />
        </div>
      )}
    </div>
  );
};

export default Searchbar;

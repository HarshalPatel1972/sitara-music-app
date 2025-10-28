// src/components/Searchbar.jsx

import React from "react";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => (
  <div className="p-8">
    <div className="flex flex-row justify-start items-center max-w-2xl mx-auto relative group">
      <FiSearch className="absolute left-6 text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search for tracks, artists..."
        type="search"
        className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-4 pl-16 pr-6 text-sm font-sans placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-slate-900/60 backdrop-blur-xl transition-all shadow-2xl"
      />
    </div>
  </div>
);


export default Searchbar;

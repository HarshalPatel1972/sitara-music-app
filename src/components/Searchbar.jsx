// src/components/Searchbar.jsx

import React from "react";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => (
  <div className="p-8">
    <div className="flex flex-row justify-start items-center max-w-2xl mx-auto relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500" />
      <FiSearch className="absolute left-6 text-slate-500 group-focus-within:text-primary transition-colors z-10" size={20} />
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search for tracks, artists..."
        type="search"
        aria-label="Search tracks and artists"
        className="w-full bg-slate-950/80 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-sm font-sans placeholder:text-slate-600 focus:outline-none focus:border-primary/50 backdrop-blur-xl transition-all shadow-2xl relative z-10"
      />
    </div>

  </div>

);


export default Searchbar;

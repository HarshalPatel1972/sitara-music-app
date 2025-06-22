// src/components/Searchbar.jsx

import React from "react";

const Searchbar = () => (
  <div className="p-4">
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search"
        type="search"
        className="flex-1 bg-transparent border-b-2 border-secondary text-base text-text-primary placeholder-text-secondary p-2 outline-none"
      />
    </div>
  </div>
);

export default Searchbar;

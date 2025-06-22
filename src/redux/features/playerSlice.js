// src/redux/features/playerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  activeSong: {},
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isPlaying = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    nextSong: (state, action) => {
      const nextIndex = action.payload;
      state.activeSong = state.currentSongs[nextIndex];
      state.currentIndex = nextIndex;
      state.isPlaying = true;
    },

    prevSong: (state, action) => {
      const prevIndex = action.payload;
      state.activeSong = state.currentSongs[prevIndex];
      state.currentIndex = prevIndex;
      state.isPlaying = true;
    },
  },
});

// Export the actions so our components can use them
export const { setActiveSong, playPause, nextSong, prevSong } =
  playerSlice.actions;

// Export the reducer to add it to our store
export default playerSlice.reducer;

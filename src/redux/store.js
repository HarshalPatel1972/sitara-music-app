// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice"; // <-- IMPORT

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer, // <-- ADD THE REDUCER
  },
  // Middleware is where RTK Query adds its magic
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

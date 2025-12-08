// src/redux/services/shazamCore.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Vite provides access to environment variables via `import.meta.env`
// The variable name MUST start with VITE_
const apiKey = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      if (apiKey) {
        headers.set("X-RapidAPI-Key", apiKey);
      }
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },

  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({
        url: "/v1/charts/world",
        params: {
          country_code: "IN",
        },
      }),
      keepUnusedDataFor: 3600, // Cache for 1 hour
    }),
  }),

});

export const { useGetTopChartsQuery } = shazamCoreApi;

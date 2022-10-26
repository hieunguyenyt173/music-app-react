import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const musicAppApi = createApi({
  reducerPath: "musicAppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9ab0128879msh31b22d0c38876c0p13ffcbjsn586d47795503"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = musicAppApi;

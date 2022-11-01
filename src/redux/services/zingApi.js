import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const zingApi = createApi({
  reducerPath: "zingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  endpoints: (builder) => ({
    getCharthome: builder.query({ query: () => "/api/charthome" }),
    getSong : builder.query({ query : (idSong) => `/api/song?id=${idSong}`}),
    getPlayList : builder.query({ query : () => `/api/home?page=Z6W9CA9D`}),
    getTop100 : builder.query({ query : () => "/api/top100"}),
    getArtist : builder.query({ query : (nameArtist) => `{/api/artist?name=${nameArtist}}`}),


  }),
});

export const { useGetCharthomeQuery, useGetSongQuery, useGetPlayListQuery, useGetTop100Query, useGetArtistQuery } = zingApi;

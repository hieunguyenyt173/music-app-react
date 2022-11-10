import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const zingApi = createApi({
    reducerPath: "zingApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://apizingmp3.herokuapp.com",
    }),
  
    endpoints: (builder) => ({
      getChartHome: builder.query({ query: () => "/api/charthome" }),
      getChart: builder.query({ query: () => '/api/home?page=Z6O06D0F' }),
      getTop100: builder.query({ query: () => "/api/top100" }),
      getSong : builder.query({ query: (songId) => `/api/song?id=${songId}` }),
      getLyric: builder.query({ query : (songId) => `/api/lyric?id=${songId}`}),
      getNewReleaseChart : builder.query({ query: () => '/api/newreleasechart' }),
      getListMvHome : builder.query({ query : () => `/api/listmv?id=IWZ9Z08I&page=1&count=10`}),
    }),
  
    
  });
  
  export const { useGetChartHomeQuery, useGetChartQuery,useGetSongQuery, useGetTop100Query, useGetLyricQuery, useGetNewReleaseChartQuery, useGetListMvHomeQuery} = zingApi;
  
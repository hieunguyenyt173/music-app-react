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
      getListMvHome : builder.query({ query : (songId, page, count) => `/api/listmv?id=${songId}&page=${page}&count={count}`}),
      getPlaylistDetail : builder.query({ query : (playlistId) => `/api/detailplaylist?id=${playlistId}`}),
      getArtistDetail : builder.query({ query : (alias) => `/api/artist?name=${alias}`}),
      getMvDetails : builder.query({ query : (id) =>  `/api/video?id=${id}`}),
    }),
  
    
  });
  export const { useGetChartHomeQuery, useGetChartQuery,useGetMvDetailsQuery, useGetSongQuery, useGetTop100Query, useGetLyricQuery, useGetNewReleaseChartQuery, useGetListMvHomeQuery,useGetPlaylistDetailQuery, useGetArtistDetailQuery } = zingApi;
  
   
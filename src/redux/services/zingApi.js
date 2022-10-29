import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const zingApi = createApi({
    reducerPath:"zingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://apizingmp3.herokuapp.com/"
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/api/charthome" }),
    })
})


export const {useGetTopChartsQuery} = zingApi;
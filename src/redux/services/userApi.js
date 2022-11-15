import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://demo-kmusic-api.herokuapp.com/",
  }),

  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "/users" }),
    addUser: builder.mutation({
      query: (data) => ({
          url: "/users",
          method: "POST",
          body: data,
      }),
  }),

  }),
});

export const { useGetUserQuery, useAddUserMutation} = userApi;

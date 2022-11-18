import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://demo-kmusic-api.herokuapp.com",
  }),

  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "/users" }),
    addUser: builder.mutation({
      query: (data) => ({
          url: "/users",
          method: "POST",
          body: data,
      })
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PUT",
        body: data,
      })
    }),
    removeUser: builder.mutation({
          query: (id) => ({
            url: `/users/${id}`,
            method: "DELETE",
          })
    }),
    addSongPlaylist: builder.mutation({
          query: (data) => ({
            url: `/users/${data.id}`,
            method : "PUT",
            body: data,
          })
    }),
    
    transformResponse: (arg) => {
      return arg
  }
  })

  
});

export const { useGetUserQuery, useAddUserMutation, useRemoveUserMutation, useUpdateUserMutation, useAddSongPlaylistMutation} = userApi;

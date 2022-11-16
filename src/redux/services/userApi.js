import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
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
    transformResponse: (arg) => {
      return arg
  }
  })

  
});

export const { useGetUserQuery, useAddUserMutation, useRemoveUserMutation, useUpdateUserMutation} = userApi;

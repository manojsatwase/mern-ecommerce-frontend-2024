import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { AllUsersResponse, DeteleUserRequest, MessageResponse, UserResponse } from "../../types/api-types";
import { User } from "../../types/types";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/` }),
  // make sure this function return wrap into paranthesis
  tagTypes:["users"],
  endpoints: (builder) => ({
        // mutation means manupulation
        // query means get request
     // when this function call when i call login manuali call
     login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
      invalidatesTags:["users"]
    }),

    deleteUser: builder.mutation<MessageResponse,DeteleUserRequest>({
      query:({userId,adminUserId}) => ({
        url:`${userId}?id=${adminUserId}`,
        method:"DELETE"
      }),
      invalidatesTags:["users"]
    }),
  
    allUsers: builder.query<AllUsersResponse,string>({
      query: id => `all?id=${id}`,
      providesTags:["users"]
    })

  }),
});

export const getUser = async(id:string) => {
  try {
    const {data} : {data: UserResponse} = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export const { useLoginMutation , useAllUsersQuery, useDeleteUserMutation} = userAPI;
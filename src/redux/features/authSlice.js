import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';


    
const initialState = {
    user: {},
    listUser:[]
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: ((state, action) => {
            state.user = action.payload
        })
    },
    extraReducers : (builder) => {
        builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
            state.listUser = action.payload
          })
         builder.addMatcher(userApi.endpoints.addUser.matchFulfilled, (state, action) => {
            state.listUser.push(action.payload)
          })
    }
})

 export const {login} = userSlice.actions;
export default userSlice.reducer; 
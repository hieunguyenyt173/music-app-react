import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';


    
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {
    } ,
    listUser:[]
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: ((state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        logout: ((state , action) => {
            state.user = {};
            localStorage.setItem("user", JSON.stringify(state.user))
        })
    },
    extraReducers : (builder) => {
        builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
            state.listUser = action.payload
          })
         builder.addMatcher(userApi.endpoints.addUser.matchFulfilled, (state, action) => {
            
            state.listUser.push(action.payload)
          })
        builder.addMatcher(userApi.endpoints.removeUser.matchFulfilled, (state, action) => {
            let index = state.listUser.findIndex(user => user.id === action.payload)
                state.listUser.splice(index, 1)
        })
       
    }
    
})

 export const {login, logout} = userSlice.actions;
export default userSlice.reducer; 
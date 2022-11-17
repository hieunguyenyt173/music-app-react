import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';


    
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {
    } ,
    listUser:[],
    
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
        }),
        likeSong : ((state , action) => {
            state.user.songFavorites.push(action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        removeSongLike : ((state , action) => {
            state.user.songFavorites.splice(action.payload, 1)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        likeVideo : ((state, action) => {
            state.user.videoFavorites.push(action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        removeVideoLike : ((state, action) => {
            state.user.videoFavorites.splice(action.payload, 1)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        likePlaylist: ((state, action) => {
            state.user.playlist.push(action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        removeLikePlaylist: ((state, action) => {
            state.user.playlist.splice(action.payload, 1)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        addPlaylistUser : ((state, action) => {
            state.user.playlistUser.push(action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
          removeUserPlaylist : ((state, action) => {
            state.user.playlistUser.splice(action.payload,1)
            localStorage.setItem("user", JSON.stringify(state.user))
        }),
        addSongUser : ((state, action) => {
     
            state.user.playlistUser.map((playlistUser) => {
              if(playlistUser.title === action.payload.playlist.title) {
                playlistUser.songs.push(action.payload.song)
                
              }
            })
            localStorage.setItem("user", JSON.stringify(state.user))
          }),
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
        builder.addMatcher(userApi.endpoints.updateUser.matchFulfilled, (state, action) => {
            let index = state.listUser.findIndex(user => user.id === action.payload.id)
            state.listUser[index] = action.payload
        })
       
    }
    
})

 export const {login, logout, removeSongLike, likeSong, likeVideo, removeVideoLike, likePlaylist, removeLikePlaylist, addPlaylistUser, removeUserPlaylist, addSongUser} = userSlice.actions;
export default userSlice.reducer; 
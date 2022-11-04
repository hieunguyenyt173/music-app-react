import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  isShowPlaylist: false,
  isShowLyric:false,
  recentlyList: JSON.parse(localStorage.getItem("recentlyList")) || [],
  listFavorites : JSON.parse(localStorage.getItem("listFavorite")) || {
    songFavorites: [],
    videoFavorites:[],
    playlist: []
  },
  isLike : false
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      state.currentSongs = action.payload.data;

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
    
    nextSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
      
    },

    prevSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
      
    },

    showPlaylist:(state, action) => {
      state.isShowPlaylist = action.payload
    },

    showLyric:(state, action) => {
      state.isShowLyric = action.payload
    },
    likeList: (state, action) => {
      
      state.listFavorites.songFavorites.push(action.payload.song)
      // state.listFavorites.playlist.push(action.payload.playlist)
    },
    removeLike : (state, action) => {
      state.listFavorites.songFavorites.splice(action.payload, 1)
      localStorage.setItem("listFavorite", JSON.stringify(state.listFavorites))
    },
    setLikeIcon: (state,action) => {
      state.isLike = action.payload;
    },
    setRecentlyList: (state, action) => {
      
        state.recentlyList.push(action.payload)
      
      
      localStorage.setItem("recentlyList", JSON.stringify(state.recentlyList))
    },
    removeHistory: (state, action) => {

      state.recentlyList.splice(action.payload, 1)
      localStorage.setItem("recentlyList", JSON.stringify(state.recentlyList))
    }
  },
});


export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, showPlaylist, showLyric, likeList, removeLike, setLikeIcon , setRecentlyList, removeHistory} = playerSlice.actions;

export default playerSlice.reducer;

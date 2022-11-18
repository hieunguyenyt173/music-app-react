import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  isShowPlaylist: false,
  isShowLyric:false,
  recentlyList : {
    songRecently: JSON.parse(localStorage.getItem("songRecently")) || [],
    videoRecently: JSON.parse(localStorage.getItem("videoRecently")) || [],
    playlistRecently: JSON.parse(localStorage.getItem("playlistRecently")) || [],
  },
  

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
    
    setSongRecently: (state, action) => {
      
        state.recentlyList.songRecently.push(action.payload)
      localStorage.setItem("songRecently", JSON.stringify(state.recentlyList.songRecently))
    },
    removeSongRecently: (state, action) => {

      state.recentlyList.songRecently.splice(action.payload, 1)
      localStorage.setItem("songRecently", JSON.stringify(state.recentlyList.songRecently))
    },
    setvideoRecently : (state, action ) => {
      
      state.recentlyList.videoRecently.push(action.payload)
      localStorage.setItem("videoRecently", JSON.stringify(state.recentlyList.videoRecently))
    },
   
    setplaylistRecently : (state, action ) => {
      state.recentlyList.playlistRecently.push(action.payload)
      localStorage.setItem("playlistRecently", JSON.stringify(state.recentlyList.playlistRecently))
    },
    
  },
});


export const { setActiveSong, nextSong, prevSong, playPause, showPlaylist, showLyric , setRecentlyList, removeHistory,  setSongRecently, removeSongRecently, setvideoRecently, setplaylistRecently} = playerSlice.actions;

export default playerSlice.reducer;

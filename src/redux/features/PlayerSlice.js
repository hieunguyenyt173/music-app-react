import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  isShowPlaylist: false,
  isShowLyric:false
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

    selectGenreListId: (state, action) => {
      
    },
    showPlaylist:(state, action) => {
      state.isShowPlaylist = action.payload
    }
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, showPlaylist } = playerSlice.actions;

export default playerSlice.reducer;

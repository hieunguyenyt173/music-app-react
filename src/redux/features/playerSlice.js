import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  isShowPlaylist: false,
  isShowLyric:false,
  listFavorites :  {
    songFavorites: JSON.parse(localStorage.getItem("listFavorite")) || [],
    videoFavorites: JSON.parse(localStorage.getItem("listVideoLike")) || [],
    playlist: JSON.parse(localStorage.getItem("listPlaylistLike")) || []
  }  ,
  recentlyList : {
    songRecently: JSON.parse(localStorage.getItem("songRecently")) || [],
    videoRecently: JSON.parse(localStorage.getItem("videoRecently")) || [],
    playlistRecently: JSON.parse(localStorage.getItem("playlistRecently")) || [],
  },
  playlistUser : JSON.parse(localStorage.getItem("playlistUser")) || [],

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
      
      state.listFavorites.songFavorites.push(action.payload)
      localStorage.setItem("listFavorite", JSON.stringify(state.listFavorites.songFavorites))
    },
    removeLike : (state, action) => {
      state.listFavorites.songFavorites.splice(action.payload, 1)
      localStorage.setItem("listFavorite", JSON.stringify(state.listFavorites.songFavorites))
    },
    setLikePlaylist: (state, action) => {
      state.listFavorites.playlist.push(action.payload)
      localStorage.setItem("listPlaylistLike", JSON.stringify(state.listFavorites.playlist))
    },
    removeLikePlaylist : (state, action) => {
      state.listFavorites.playlist.splice(action.payload, 1)
      localStorage.setItem("listPlaylistLike", JSON.stringify(state.listFavorites.playlist))
    },
    setLikeVideo: (state,action) => {
      state.listFavorites.videoFavorites.push(action.payload)
      localStorage.setItem("listVideoLike", JSON.stringify(state.listFavorites.videoFavorites))
    },
    removeLikeVideo: (state, action) => {
      state.listFavorites.videoFavorites.splice(action.payload, 1)
      localStorage.setItem("listVideoLike", JSON.stringify(state.listFavorites.videoFavorites))
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
    addPlaylistUser : (state, action) => {
      state.playlistUser.push(action.payload)
      localStorage.setItem("playlistUser", JSON.stringify(state.playlistUser))
    },
    addSongUser : (state, action) => {
     
      state.playlistUser.map((playlistUser) => {
        if(playlistUser.title === action.payload.playlist.title) {
          playlistUser.songs.push(action.payload.song)
          
        }
      })
      localStorage.setItem("playlistUser", JSON.stringify(state.playlistUser))
    }
  },
});


export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, showPlaylist, showLyric, likeList, removeLike, setLikeIcon , setRecentlyList, removeHistory,setLikePlaylist,
  removeLikePlaylist, setLikeVideo,removeLikeVideo , setSongRecently, removeSongRecently, setvideoRecently, setplaylistRecently, addPlaylistUser, addSongUser} = playerSlice.actions;

export default playerSlice.reducer;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Discover from "./pages/Discover";
import NewSongs from "./pages/NewSongs";
import ArtistDetails from "./pages/ArtistDetails";
import SongDetails from "./pages/SongDetails";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import Genres from "./pages/Genres";
import TopicDetails from "./pages/TopicDetails";

import TopMV from "./pages/TopMV";
import PlaylistDetails from "./pages/PlaylistDetails";
import TopAlbums from "./pages/TopAlbums";
import MvDetails from "./pages/MvDetails";
import PlaylistUser from "./pages/PlaylistUser";
import PlaylistUserDetails from "./pages/PlaylistUserDetails";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  
  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Discover />} />
          <Route path="/nhac-moi" element={<NewSongs />} />
          <Route path="/the-loai" element={<Genres />} />
          <Route path="/the-loai/:idTopic" element={<TopicDetails />} />
          <Route path="/top-albums" element={<TopAlbums />} />
          <Route path="/mv" element={<TopMV />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlists/:idPlaylist" element={<PlaylistDetails />} />
          <Route path="/videos/:videoId" element={<MvDetails />} />
          <Route path="/history" element={<History />} />
          <Route path="/nghe-sy/:artistId" element={<ArtistDetails />} />
          <Route path="/songs/:songId" element={<SongDetails />} />
          <Route path="/playlist-user" element={<PlaylistUser />} />
          <Route path="/playlist-user/:idUser" element={<PlaylistUserDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

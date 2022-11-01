import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Discover from "./pages/Discover";
import NewSongs from "./pages/NewSongs";
import ArtistDetails from "./pages/ArtistDetails";
import SongDetails from "./pages/SongDetails";
import TopCharts from "./pages/TopCharts";
import TopArtists from "./pages/TopArtists";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";
import History from "./pages/History";
import Genres from "./pages/Genres";
import TopicDetails from "./pages/TopicDetails";


function App() {
  
  return (
    <div className="relative">
      <Routes>
        <Route path="/k-music.herokuapp.com" element={<Layout />}>
          <Route index element={<Discover />} />
          <Route path="/nhac-moi" element={<NewSongs />} />
          <Route path="/the-loai" element={<Genres />} />
          <Route path="/the-loai/:idTopic" element={<TopicDetails />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/artists/id" element={<ArtistDetails />} />
          <Route path="/songs/songId" element={<SongDetails />} />
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

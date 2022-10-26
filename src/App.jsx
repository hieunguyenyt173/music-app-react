import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Discover from "./pages/Discover";
import AroundYou from "./pages/AroundYou";
import ArtistDetails from "./pages/ArtistDetails";
import SongDetails from "./pages/SongDetails";
import TopCharts from "./pages/TopCharts";
import TopArtists from "./pages/TopArtists";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";
import History from "./pages/History";


function App() {
  
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Discover />} />
          <Route path="/around-you" element={<AroundYou />} />
          <Route path="/top-charts" element={<TopCharts />} />
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
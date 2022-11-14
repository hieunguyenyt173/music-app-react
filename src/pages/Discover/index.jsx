import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import Events from "./Events";
import FeaturedArtists from "./FeaturedArtists";

import NewReleases from "./NewReleases";
import TopAlbums from "./TopAlbums";
import TopChartsHome from "./TopChartsHome";
import { useSelector } from "react-redux";


import Banner from "./Banner";
import VideoHot from "./VideoHot";
import {
  useGetChartHomeQuery,
  useGetChartQuery,
  useGetListMvHomeQuery,
  useGetTop100Query,
} from "../../redux/services/zingApi";
import Vpop from "./Vpop";
import RelatedSong from "./RelatedSong";
function Homepage() {
  const { activeSong, isPlaying, listFavorites } = useSelector(
    (state) => state.player
  );
  const [dataHome, setDataHome] = useState();
  const [dataArtistList, setDataArtistList] = useState();
  const [dataPlaylist, setDataPlaylist] = useState();
  // const NhacCuaTui = require("nhaccuatui-api-full");
  const { data, isFetching, isError } = useGetChartHomeQuery();
  const { data: chartpage } = useGetChartQuery();
  const {data: top100} = useGetTop100Query();
  const {data:mv} = useGetListMvHomeQuery("IWZ9Z08I","1","15")
  if (isFetching) {
    return <Loader title={"Loading..."} />;
  }
  if (isError) {
    return <Error />;
  }
  console.log(mv);

  
  const newRelease = data?.data?.newRelease;
  const topchart = data?.data?.RTChart?.items.slice(0, 10);
  const weekChart = data?.data?.weekChart;
  const banner = chartpage?.data?.items[0]?.items;
  const vpop = chartpage?.data?.items[3]?.items?.vPop
  const videoHot = mv?.data?.items;
  const relatedSong = chartpage?.data?.items[3]?.items?.others
  const top100Home = top100?.data[0]?.items.slice(0,6)
  console.log(top100)
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <Banner data={banner} />
      <Vpop
       data={vpop}
       activeSong={activeSong}
       isPlaying={isPlaying}
      />
      <TopChartsHome
        data={topchart}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
      <Events 
      data={weekChart}
      isPlaying={isPlaying} 
      activeSong={activeSong} />
      <NewReleases
        data={newRelease}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
      <FeaturedArtists artistTrending={[]} />
      <RelatedSong 
        data={relatedSong}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
      <TopAlbums data={top100Home} />
      
      <VideoHot data={videoHot} />
    </div>
  );
}

export default Homepage;

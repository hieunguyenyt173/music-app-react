import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import BestPlaylist from './BestPlaylist'
import Events from './Events'
import FeaturedArtists from './FeaturedArtists'

import NewReleases from './NewReleases'
import TopAlbums from './TopAlbums'
import TopChartsHome from './TopChartsHome'
import {useDispatch, useSelector} from 'react-redux'
import Top100Home from './Top100Home'
import HotTopic from './HotTopic'
import Banner from './Banner'
import VideoHot from './VideoHot'
function Homepage() {
 
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const [dataHome,setDataHome] = useState();
  const [dataArtistList,setDataArtistList] = useState()
  const [dataPlaylist, setDataPlaylist] = useState()
  // if(isFetching) return <Loader title="Loading ..."/>
  // if(error) return <Error />
  const NhacCuaTui = require("nhaccuatui-api-full");
    useEffect(() => {
      NhacCuaTui.getHome().then((data) => console.log(JSON.stringify(data)));
      NhacCuaTui.getTrendingArtists().then((data) => setDataArtistList(data))
      
    },[])
    const newRelease = dataHome?.newRelease?.song
    const artistTrending = dataArtistList?.artistTrending
    const top100Home = dataHome?.top100
    const banner = dataHome?.showcase
    const topChart = dataHome?.song
    const videoHot = dataHome?.video
  //  console.log(dataPlaylist)
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
      <Banner 
          data={banner}
      />
      <HotTopic 
      data={dataHome?.topic}
      />
    <TopChartsHome 
      data={topChart}
      activeSong={activeSong} 
      isPlaying={isPlaying}
      />
      <Events 
      isPlaying={isPlaying}
      activeSong={activeSong}
     />
    <NewReleases 
      data={newRelease} 
      isPlaying={isPlaying}
      activeSong={activeSong}
      />
    <FeaturedArtists 
      artistTrending={artistTrending}
    />
    {/* <TopAlbums 
    data={""}
    /> */}
    {/* <BestPlaylist 
     isPlaying={isPlaying}
     activeSong={activeSong}
    /> */}
    <Top100Home
    data={top100Home}
    />
    <VideoHot 
      data={videoHot}
    />
    </div>
  )
}

export default Homepage
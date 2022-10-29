import React from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import BestPlaylist from './BestPlaylist'
import Events from './Events'
import FeaturedArtists from './FeaturedArtists'
import LiveRadio from './LiveRadio'
import NewReleases from './NewReleases'
import TopAlbums from './TopAlbums'
import TopChartsHome from './TopChartsHome'
import {useGetTopChartsQuery} from '../../redux/services/musicApp'
import {useDispatch, useSelector} from 'react-redux'
import { useGetCharthomeQuery, useGetPlayListQuery, useGetSongQuery } from '../../redux/services/zingApi'
import { useInRouterContext } from 'react-router-dom'
import ForWeekend from './ForWeekend'
function Homepage() {
  const {data, isFetching,error} = useGetCharthomeQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const {data : dataPlaylist} = useGetPlayListQuery()
  console.log(data)
  const dispatch = useDispatch()
  if(isFetching) return <Loader title="Loading ..."/>
  if(error) return <Error />
  const newRelease = data.data.newRelease
  const weekCharts = data.data.weekChart
  const topChart = data.data.RTChart.items;
  
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
    <TopChartsHome data={topChart} activeSong={activeSong} isPlaying={isPlaying}/>
     <Events 
     isPlaying={isPlaying}
     activeSong={activeSong}
     weekCharts={weekCharts}
     />
    <NewReleases 
    data={newRelease} 
    isPlaying={isPlaying}
    activeSong={activeSong}
    />
    {/* <FeaturedArtists /> */}
    <TopAlbums 
    data={dataPlaylist}
    />
    <BestPlaylist 
     isPlaying={isPlaying}
     activeSong={activeSong}
    />

    <ForWeekend 
    dataPlaylist={dataPlaylist}
    isPlaying={isPlaying}
    activeSong={activeSong}
    />
    {/* <LiveRadio/> */}
    </div>
  )
}

export default Homepage
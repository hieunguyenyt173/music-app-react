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
function Homepage() {
  const {data, isFetching,error} = useGetTopChartsQuery();
  const dispatch = useDispatch()
  const { activeSong, isPlaying,currentSongs } = useSelector((state) => state.player)
  if(isFetching) return <Loader title="Loading ..."/>
  if(error) return <Error />
 
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
    <TopChartsHome data={data} activeSong={activeSong} isPlaying={isPlaying}/>
    <Events />
    <NewReleases />
    <FeaturedArtists />
    <TopAlbums />
    <BestPlaylist />
    <LiveRadio/>
    </div>
  )
}

export default Homepage
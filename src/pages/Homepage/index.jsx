import React from 'react'

import BestPlaylist from './BestPlaylist'
import Events from './Events'
import FeaturedArtists from './FeaturedArtists'
import NewReleases from './NewReleases'
import NewSongs from './NewSongs'
import TopChartsHome from './TopChartsHome'

function Homepage() {
  return (
    <div className='container mx-auto px-6 mb-10'>
    <TopChartsHome />
    <NewReleases />
    <FeaturedArtists />
    <NewSongs />
    <BestPlaylist />
    <Events />
   
    </div>
  )
}

export default Homepage
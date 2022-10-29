import React from 'react'
import {loading} from '../assets'
import MusicPlayer from '../components/MusicPlayer'
function History() {
  return (
    <div>
    <img src={loading} class=" h-8 w-8 bg-transparent absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
    </div>
  )
}

export default History
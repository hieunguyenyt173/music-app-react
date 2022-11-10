import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import SongItem from '../components/SongItem';
import { useGetNewReleaseChartQuery } from '../redux/services/zingApi';
function NewSongs() {
  const {data, isFetching} = useGetNewReleaseChartQuery()
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  const listNewSong = data?.data?.items
  if(isFetching) {
    return <Loader title={"Loading..."} />
  }

  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-5xl font-bold text-sky-600 pb-3">
           Nhạc mới
          </p>
        <div>
          {listNewSong && listNewSong.map((song, i) => (
            <SongItem 
            key={i}
            song={song}
            data={listNewSong}
            isPlaying={isPlaying}
            activeSong={activeSong}
            i ={i}
            />
          ))}
        </div>
    </div>
  )
}

export default NewSongs
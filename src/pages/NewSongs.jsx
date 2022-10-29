import React from 'react'
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loader from '../components/Loader';
import SongItem from '../components/SongItem';
import { useGetCharthomeQuery } from '../redux/services/zingApi'

function NewSongs() {
  const {data, isFetching,error} = useGetCharthomeQuery();
  const listNewSong = data?.data?.RTChart?.items;
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  if(isFetching) return <Loader title="Loading ..."/>
  if(error) return <Error />

  console.log(listNewSong)
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-5xl font-bold text-sky-600">
           Nhạc mới
          </p>
        <div>
          {listNewSong.map((song, i) => (
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
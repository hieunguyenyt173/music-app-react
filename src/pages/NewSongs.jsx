import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SongItem from '../components/SongItem';
function NewSongs() {
  
  const NhacCuaTui = require("nhaccuatui-api-full");
  const [listNewSong, setListNewSong] = useState()
  // const tabs = [
  //   { title: "VIỆT NAM", list:  "nhac-viet"},
  //   { title: "ÂU MỸ", list:  "au-my"},
  //   { title: "HÀN QUỐC", list:  "nhac-han"},
  // ];
  const {isPlaying, activeSong} = useSelector((state) => state.player)
  
  useEffect(() => {

    NhacCuaTui.explore({
      type: "song",
      key: "moi-hot",
      page: 1,
      pageSize: 50,
    }).then((data) => setListNewSong(data?.data))
  },[])

  return (
    <div className='lg:container mx-auto px-12 mb-10'>
       <p className="heading text-5xl font-bold text-sky-600">
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
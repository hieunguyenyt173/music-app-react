import React from 'react'
import SongItem from '../../components/SongItem'

function TopAlbums() {
  return (
    <div className=" mt-7">
        <p className="font-semibold text-xs uppercase">Trending to listen</p>
        <div className="flex justify-between items-center">
          <p className="heading text-[32px] font-bold">
            Top <span className=" text-sky-600">Albums</span>
          </p>
          <a
            href="/"
            className="uppercase text-sm font-semibold underline text-sky-600 "
          >
            View All
          </a>
        </div>
       <div className='columns-2'>
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
        <SongItem />
       </div>
      </div>
  )
}

export default TopAlbums
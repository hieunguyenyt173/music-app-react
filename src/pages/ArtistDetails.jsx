import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArtistDetails() {
  const {artistId} = useParams()
  const [data, setData] = useState()
  const {getArtistDetail} = require("nhaccuatui-api-full")
  useEffect(() => {
    getArtistDetail(artistId).then((data) => setData(data))
  },[])
  console.log(data)
  return (
    <div className='min-h-[600px] '>
     <p className='text-center heading text-[32px] font-bold text-sky-600'>
     {data?.error && data?.error.message}
     </p>
    </div>
  )
}

export default ArtistDetails
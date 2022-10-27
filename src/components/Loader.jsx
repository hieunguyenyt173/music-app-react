import React from 'react'
import {loader} from '../assets/'
function Loader({title}) {
  return (
    <div className='w-full flex justify-center items-center flex-col my-36' >
        <img src={loader} alt="loader" className='w-32 h-32 object-contain'/>
        <h1 className='font-bold text-2xl'>{title || "Loading ..."}</h1>
    </div>
  )
}

export default Loader
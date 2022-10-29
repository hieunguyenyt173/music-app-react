import React from 'react'

function Seekbar({min, max,value, onInput}) {
  
  const getTime = (time) => `${Math.floor(time / 60)}:${(`${Math.floor(time % 60)}`).slice(-2)}`;
  return (
    <div className='flex justify-center items-center'>
      <p className='mr-2 text-xs'>{value === 0 ? "0:0" : getTime(value)}</p>
      <input 
      className='w-96 h-1'
      type="range"
      value={value}
      onInput={onInput}
      step="any"
      min={min}
      max={max}
      />
      <p className='ml-2 text-xs'>{max === 0 ? "00:00" : getTime(max)}</p>

    </div>
  )
}

export default Seekbar
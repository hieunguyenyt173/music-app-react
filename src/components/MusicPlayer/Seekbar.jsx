import React from 'react'
export const getTime = (time) => {
  const timeChange = new Date(time *1000).toISOString().slice(14,19)
  return timeChange
};
function Seekbar({min, max,value, onInput}) {
  
 
  return (
    <div className='flex justify-center items-center'>
      <p className='mr-2 text-xs'>{value === 0 ? "00:00" : getTime(value)}</p>
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
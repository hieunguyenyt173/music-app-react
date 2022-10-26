import React from 'react'

function Footer() {
  return (
    <div className='mt-5'>
        <div className='footer px-6 py-5 h-[260px] relative'>
            
            <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
            <p className='footer-title text-3xl font-semibold italic text-sky-600 mb-5'>Experience the best music</p>
                <div className='flex justify-center'>
                <button className='flex bg-sky-500 text-white p-3 mx-3 w-1/2 rounded-lg hover:bg-sky-600'>
                    <i className='ri-google-play-fill mr-2'></i>
                    Google
                </button>
                <button className='flex  bg-sky-500 text-white p-3  mx-3 w-1/2 rounded-lg hover:bg-sky-600'>
                    <i className='ri-app-store-fill mr-2'></i>
                    App store
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React, { useState } from 'react'

function PlaylistUser() {
    const [isShowModal, setIsShowModal] = useState(false)


    const handleAddPlaylist = () => {
        setIsShowModal(true)
    }
  return (
    <div className='lg:container mx-auto px-12 mb-10 min-h-[650px] relative'>
       {isShowModal &&  <div className='w-96 h-56 bg-[#97b8eb] p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
            <div className='flex justify-between items-center pb-3'>
            <p className='text-center'>Tạo playlist mới</p>
            <i class="ri-close-line flex justify-end text-2xl" onClick={(e) => setIsShowModal(false)}></i>
            </div>
            <input type="text" 
            className='w-full px-3 py-2 rounded-lg bg-transparent placeholder:text-slate-500 border border-[0.5px] contrast-more:border-slate-400'
            placeholder='Nhập tên playlist'/>
           <div className='w-full'>
           <button className='px-4 py-2 bg-sky-700 text-slate-200 rounded-lg mt-5 block mx-auto'>
                Tạo mới
            </button>
           </div>
        </div>}
        <p className="heading text-[32px] font-bold text-sky-600 pb-3">
           Playlist
          </p>
          <div className='grid grid-cols-5 gap-5'>
                <div className='border border-gray-700 min-h-[250px] flex justify-center items-center hover:text-sky-600' onClick={handleAddPlaylist}>
                <div>
                <p className="text-center py-3">Tạo playlist mới</p>  
                <div className="flex justify-center">
                <i class="ri-add-circle-line text-5xl"></i>
                </div>
                </div>
                </div>
          </div>
         
    </div>
  )
}

export default PlaylistUser
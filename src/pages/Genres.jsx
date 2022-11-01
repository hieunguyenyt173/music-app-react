import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const ItemGenres = ({topic}) => {
    return (
       <Link to={`/the-loai/${topic.key}`}>
        <div className='duration-300 overflow-hidden ease-linear' >
            <img className='hover:scale-105' src={topic?.coverImageURL} alt="" />
        </div>
       </Link>
    )
}

function Genres() {
    const NhacCuaTui = require("nhaccuatui-api-full");
    const [listAllTopic,setListAllTopic] = useState()
    useEffect(() => {
        NhacCuaTui.getTopics().then((data) => setListAllTopic(data));
    },[])
    console.log(listAllTopic)
    return (
        <div className='lg:container mx-auto px-12 mb-10'>
           <div>
           <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
                Đang hot
            </p>
            <div className='grid grid-cols-3 gap-4'> 
            {listAllTopic && listAllTopic?.topic?.slice(8,14).map((topic) => (
                <ItemGenres topic={topic}/>
            ))}
            </div>
           </div>
           <div>
           <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
                Quốc gia
            </p>
            <div className='grid grid-cols-3 gap-4'> 
            {listAllTopic && listAllTopic?.topic?.slice(1,7).map((topic) => (
                <ItemGenres topic={topic}/>
            ))}
            </div>
           </div>

           <div>
           <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
                Tất cả thể loại
            </p>
            <div className='grid grid-cols-3 gap-5'> 
            {listAllTopic && listAllTopic?.topic?.slice(1).map((topic) => (
                <ItemGenres topic={topic}/>
            ))}
            </div>
           </div>
          
        </div>
      )
}

export default Genres
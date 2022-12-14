import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { useGetLyricQuery } from '../redux/services/zingApi';

function LyricModal() {
    const {  activeSong, isShowLyric } = useSelector(
        (state) => state.player
      );
     
      const {data} = useGetLyricQuery(activeSong?.encodeId)
      const lyricTitle = data?.data?.sentences
      
      return (
        <div className={`fixed top-0  bottom-20 z-50 bg-gradient-to-br bg-[#97b8eb] backdrop-blur-lg w-[500px] overflow-hidden duration-300
          ${isShowLyric ? "right-0" : " right-[-500px]"}
        `}>
          <div className="border-b border-gray-400 flex justify-between items-center">
            <p className="uppercase p-3 text-sm font-semibold">
              Lời bài hát
            </p>
          </div>
          <div className="p-5 ">
            <div className="w-full">
            <div className="w-72 h-72 mx-auto">
            <img 
            className='w-full h-full object-cover'
            src={activeSong.thumbnailM} alt="" />
            </div>
            <p className="font-semibold text-sm mt-2 text-center">{activeSong?.title}</p>
            <div className="flex justify-center">
              {[] || activeSong?.artists.map((artist,i) => (
                  <p
                  className="text-[13px] text-gray-500 hover:underline pb-3 pr-1 "
                  key={i}
                  >
                  {artist?.name}
                  {activeSong.artists.length > 1 && i === 0 ? "," : ""}
                  </p>
                
              ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl uppercase text-[20px] font-semibold text-center">
          Lyric
          </div>
          <div className="p-3 ">
           
            <div className="overflow-y-auto h-[360px] px-5">
             {
              lyricTitle && lyricTitle.map((line, i) => (
                <p key={i}>
                  {line.words.map((word, i) => (
                     word.data + " "
                  ))}
                </p>
              ))
             }
            </div>
          </div>
        </div>
      );
}

export default LyricModal
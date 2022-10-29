import React from "react";
import { useGetSongQuery } from "../redux/services/zingApi";
import {loading} from '../assets/index'
function PlayPause({ isPlaying, activeSong, song, handlePlay, handlePause }) {
    const {isFetching} = useGetSongQuery(activeSong.encodeId)
  return (
    <>
      {(isPlaying && activeSong?.title === song?.title) ? (
        (isFetching) ?
        <img src={loading} className=" h-8 w-8 text-gray-600 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
         :
          <i
        className="ri-pause-fill icon-pause text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        onClick={handlePause}
      ></i>
      ) : (
        <i
          className="ri-play-fill icon-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          onClick={handlePlay}
        ></i>
      )}
    </>
  );
}

export default PlayPause;

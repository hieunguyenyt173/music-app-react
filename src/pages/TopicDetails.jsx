import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function PlaylistCard({ playlist }) {
  return (
    <Link to={`/the-loai/idTopic/${playlist?.key}`}>
      <div className="playlist-card group">
        <div className="w-full rounded-xl overflow-hidden relative">
          <img
            className="group-hover:scale-110 transition-all"
            src={playlist?.thumbnail}
            alt=""
          />
        </div>
        <p className="font-semibold text-sm mt-2"
        >
        {playlist?.title}
        </p>
        <div className="">
          {playlist.artists.map((artist,i) => (
              <Link
              to={
                playlist?.artists
                  ? `/artists/${playlist?.artist?.shortLink}`
                  : `/top-artists`
              }
              className="text-[13px] text-gray-500 hover:underline pb-3 pr-1"
              key={i}
              >
              {artist.name}
              {playlist.artists.length > 1 && i === 0 ? "," : ""}
            </Link>
            
          ))}
          </div>
      </div>
    </Link>
  );
}

function TopicDetails() {
  const { idTopic } = useParams();

  const NhacCuaTui = require("nhaccuatui-api-full");
  const [topicDetail, setTopicDetail] = useState();
  useEffect(() => {
    NhacCuaTui.getTopicDetail(idTopic).then((data) => setTopicDetail(data));
  }, []);
  console.log(topicDetail);
  return (
    <div className="lg:container mx-auto px-12 mb-10">
      <div className="rounded-3xl overflow-hidden">
        <img
          className="w-full h-56 object-cover"
          src={topicDetail?.topic?.coverImageURL}
          alt=""
        />
      </div>
      <p className="heading text-[32px] font-bold text-sky-600 mt-7 mb-3">
        {topicDetail?.topic?.title}
      </p>
      <div className="grid grid-cols-5 gap-5">
        {topicDetail?.topic?.playlist.map((playlist) => (
          <PlaylistCard playlist={playlist} />
        ))}
      </div>
    </div>
  );
}

export default TopicDetails;

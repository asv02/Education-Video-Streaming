import React from "react";

function VideoCard({ detail }) {
  const title = detail?.snippet?.title;
  const description = detail?.snippet?.description;
  const publishedAt = detail?.snippet?.publishedAt;
  const thumbnail_img = detail?.snippet?.thumbnails?.medium?.url;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 m-4 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
      <img
        src={thumbnail_img}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 truncate">{description}</p>
        <span className="text-xs text-gray-400">{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default VideoCard;
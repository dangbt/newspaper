import React from "react";

export default function ContentGiaiTriItem({
  title,
  images: { imageFbThumbnail },
  commentsCount = 0,
  upVoteCount = 0,
  url
}) {
  return (
    <div className="w-2/3 p-4 mb-2 bg-white rounded shadow-xs">
      <a href={url} target="__blank" className="">
        <h1 className="mb-2 font-bold text-16 md:text-24">{title}</h1>
        <div className="text-center">
          <img
            className="mx-auto"
            src={imageFbThumbnail.url}
            alt={title}
            loading="lazy"
          />
        </div>
        <div>
          <p className="mt-2 text-gray-500">
            {upVoteCount} điểm | {commentsCount} bình luận
          </p>
        </div>
      </a>
    </div>
  );
}

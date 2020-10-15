import React from "react";
import TagCategory from "components/tag-category";
import { formatUnixToDate } from "utils/format";

export default function CardItem({
  thumbnail_url,
  title,
  publish_time,
  share_url,
  tagCategory
}) {
  return (
    <div className="inline-block w-full mb-2 align-top sm:w-1/2 md:w-1/3 lg:w-1/4">
      <a className="hover:text-blue-600" href={share_url} target="_blank">
        <div className="mx-1 border rounded-lg">
          <div style={{ height: 200 }} className="w-full">
            <img
              style={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem"
              }}
              className="w-full h-full"
              src={thumbnail_url}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <TagCategory varition="error">{tagCategory}</TagCategory>
            <h3
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: 48
              }}
              className="font-semibold text-16"
            >
              {title}
            </h3>
            <p className="text-gray-500 text-14">
              {formatUnixToDate(publish_time)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

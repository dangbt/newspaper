import React from "react";
import TagCategory from "components/tag-category";
import Link from "components/link";
export default function CardItem({ src, title }) {
  const titleSplit = title.substring(0, 50) + "...";
  return (
    <div className="inline-block w-full mb-2 align-top sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="mx-1 border rounded-lg">
        <div style={{ height: 200 }} className="w-full">
          <img
            style={{
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem"
            }}
            className="w-full h-full"
            src={src}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <TagCategory varition="error">Bussinness</TagCategory>
          <Link href="#">
            <h3 className="font-semibold text-16">{titleSplit}</h3>
          </Link>
          <p className="text-gray-500 text-14">Sept 21</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "components/link";
import TagCategory from "components/tag-category";

export default function RightSectionItem() {
  const title =
    "Today, I came up with a new shot with a clear and minimal style.";
  const titleSplit = title.substring(0, 50) + "...";
  return (
    <div className="flex mb-4 right-section-item">
      <div className="w-1/4 mr-2">
        <img
          className="w-full h-full rounded-lg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          }
          alt=""
        />
      </div>
      <div className="w-3/4">
        <TagCategory varition="success" className="mr-2 text-14">
          Bussiness
        </TagCategory>
        <Link href="#">
          <h1 className="font-bold text-16">{titleSplit}</h1>
          <p className="font-semibold text-gray-500 text-14">Sept 21</p>
        </Link>
        <p></p>
      </div>
    </div>
  );
}

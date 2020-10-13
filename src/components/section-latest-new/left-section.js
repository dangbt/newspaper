import React from "react";
import TagCategory from "components/tag-category";

export default function LeftSection() {
  return (
    <>
      <div>
        <h1 className="font-bold text-24 lg:text-36">
          Today, I came up with a new shot with a clear and minimal style.
        </h1>
        <div className="flex items-center">
          <TagCategory varition="success" className="mr-2">
            Bussiness
          </TagCategory>
          <p className="font-semibold text-gray-500 text-14">Sept 21</p>
        </div>
      </div>
      <div
        style={{
          height: 375
        }}
        className="w-full h-full mt-2"
      >
        <img
          className="w-full h-full rounded-lg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          }
          alt=""
          loading="lazy"
        />
      </div>
    </>
  );
}

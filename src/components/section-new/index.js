import React from "react";
import CardNew from "components/section-new/card-new";

const NewsList = [
  {
    title: "Today, I came up with a new shot with a clear and minimal style.",
    src: "https://www.w3schools.com/w3css/img_lights.jpg"
  },
  {
    title:
      "Here we have a newsletter online page platform that allows you to find news and articles easily.",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  },
  {
    title:
      "Here we have a newsletter online page platform that allows you to find news and articles easily.",
    src: "https://www.w3schools.com/w3css/img_lights.jpg"
  },
  {
    title: "Today, I came up with a new shot with a clear and minimal style.",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  },
  {
    title: "Today, I came up with a new shot with a clear and minimal style.",
    src: "https://www.w3schools.com/w3css/img_lights.jpg"
  },
  {
    title:
      "Here we have a newsletter online page platform that allows you to find news and articles easily. ahsfdjsf  djfkdfj djfkdf  djfkdf dfkdfjdk f",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  }
];

export default function SectionNew({ posts, tagCategory }) {
  return (
    <div className="my-4">
      <h1 className="my-2 font-bold text-24 lg:text-36">
        Tin {tagCategory.toLowerCase()}
      </h1>
      <div className="-mx-1">
        {posts.length > 0 &&
          posts.map(item => <CardNew {...item} tagCategory={tagCategory} />)}
      </div>
    </div>
  );
}

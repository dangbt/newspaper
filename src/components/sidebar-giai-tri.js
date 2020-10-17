import React from "react";
import Link from "components/link";
const DEFAULT_TOP_SIDE_BAR = [
  {
    txt: "Ảnh nóng"
  },
  {
    txt: "Ảnh đú"
  }
];
const DEFAULT_BOTTOM_SIDE_BAR = [
  {
    txt: "Funny"
  },
  {
    txt: "Girl"
  }
];
export default function SideBarGiaiTri() {
  return (
    <>
      <div>
        <ul>
          {DEFAULT_TOP_SIDE_BAR.map(item => (
            <li
              key={item.txt}
              className="w-full p-2 font-semibold uppercase rounded cursor-pointer hover:bg-gray-300 "
            >
              {item.txt}
            </li>
          ))}
        </ul>
        <div className="">
          <h1 className="mt-2 font-bold text-gray-500 text-14">Phổ biến</h1>
          <ul>
            {DEFAULT_BOTTOM_SIDE_BAR.map(item => (
              <li
                key={item.txt}
                className="block w-full p-2 font-semibold uppercase rounded cursor-pointer hover:bg-gray-300"
              >
                {item.txt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

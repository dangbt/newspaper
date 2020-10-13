import React from "react";
export default function Button({ children, className = "", ...rest }) {
  return (
    <button
      className={`py-2 px-3 border rounded focus:outline-none hover:bg-gray-500 font-bold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

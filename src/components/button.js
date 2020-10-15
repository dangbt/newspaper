import React from "react";
export default function Button({
  children,
  className = "",
  disabled,
  ...rest
}) {
  return (
    <button
      disabled={disabled}
      className={`py-2 px-3 border rounded focus:outline-none hover:bg-gray-500 font-bold ${className} ${
        disabled ? "bg-gray-500" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

import React from "react";

export default function Select({ children, className = "", ...rest }) {
  return (
    <select
      {...rest}
      className={`focus:outline-none px-3 py-2 border rounded ${className}`}
    >
      <option disabled>Chọn...</option>
      {children}
    </select>
  );
}

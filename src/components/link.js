import React from "react";
import NextLink from "next/link";

export default function Link({ children, href, className = "" }) {
  return (
    <NextLink href={href}>
      <a className={`hover:text-blue-600 ${className}`}>{children}</a>
    </NextLink>
  );
}

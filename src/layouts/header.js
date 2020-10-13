import React from "react";
import Head from "next/head";

export default function Header({ title = "Trang chủ | Bình Sơn" }) {
  return (
    <header>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <ul>
        <li>Trang chủ</li>
        <li>Trang chủ</li>
        <li>Trang chủ</li>
        <li>Trang chủ</li>
      </ul>
    </header>
  );
}

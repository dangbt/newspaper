import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { DEFAULT_MENU } from "../constants";

export default function Header({ title = "Trang chủ | Bình Sơn" }) {
  const router = useRouter();
  const pathname = router.pathname;
  const { category } = router.query;
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between py-2 pb-3 bg-white border-b">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden md:block"></div>
      <ul className="flex items-center font-bold menu-list text-16">
        {DEFAULT_MENU.map(item => {
          const isActiveLink =
            pathname === item.link || `/${category}` === item.link;
          return (
            <li
              key={item.link}
              className={`relative mx-2 ${isActiveLink ? "active" : ""}`}
            >
              <Link href={item.link}>
                <a> {item.txt}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

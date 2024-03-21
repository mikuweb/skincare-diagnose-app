"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath === path;
  };
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Skin type", path: "/skin-type" },
    { name: "Skin care product", path: "#" },
    { name: "coming soon", path: "#" },
  ];

  return (
    <nav
      className={`${
        openMenu ? "h-full bg-transparent" : "bg-white"
      } fixed flex flex-col items-start justify-between w-full z-10 
      lg:flex-row lg:items-center lg:px-4`}
    >
      <Link
        href={"/"}
        className={`${
          openMenu ? "hidden" : "block"
        } w-fit h-12 flex items-center ml-3 font-english text-brown-100`}
      >
        Skin Care
      </Link>

      <div className="absolute top-3 right-3 cursor-pointer lg:hidden">
        {openMenu ? (
          <svg
            onClick={() => setOpenMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x text-brown-100"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            onClick={() => setOpenMenu(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu text-brown-100"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </div>

      <div
        className={`${openMenu ? "flex" : "hidden"} 
        w-full h-3/4 flex-col justify-center gap-16 bg-beige-100 bg-opacity-90 text-center pt12 pb-16 font-english text-3xl 
        lg:flex lg:flex-row lg:bg-transparent lg:text-brown-100 lg:w-1/2 lg:h-full lg:text-base lg:justify-between lg:gap-0 lg:pb-0`}
      >
        {pages.map((page, idx) => (
          <Link
            key={idx}
            href={page.path}
            className="font-serif"
            onClick={() => setOpenMenu(false)}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;

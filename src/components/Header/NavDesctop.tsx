"use client";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";
import React from "react";

const NavDesctop = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <ul className="hidden lg:h-16 lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route, i) => {
        const { href, title } = route;
        return (
          <li key={i}>
            <a
              href={href}
              className={`${
                isActive(route.href) ? "text-leaf-200" : "text-brown-100"
              } flex items-center gap-1 text-lg hover:text-neutral-400 transition-all font-english`}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesctop;

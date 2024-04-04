"use client";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const NavDesctop = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.9 } }}
      className="hidden lg:h-20 lg:flex lg:items-center gap-5 text-sm"
    >
      {routes.map((route, i) => {
        const { href, title } = route;
        return (
          <motion.li
            initial={{ opacity: 0, translateY: 15 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 1, delay: 0.1 + 0.1 * i },
            }}
            key={i}
          >
            <a
              href={href}
              className={`${
                isActive(route.href) ? "text-leaf-200" : "text-brown-100"
              } flex items-center gap-1 text-lg hover:text-neutral-400 transition-all font-english`}
            >
              {title}
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default NavDesctop;

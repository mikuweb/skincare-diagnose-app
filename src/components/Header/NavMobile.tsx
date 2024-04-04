"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "@/lib/routes";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className="lg:hidden ">
      <div className="cursor-pointer lg:hidden">
        {isOpen ? (
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x text-brown-100 z-10"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu text-brown-100 z-10"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-11 right-0 h-3/4 bg-beige-100 bg-opacity-95 text-center pt12 pb-16 font-english text-3xl"
          >
            <ul className="flex flex-col gap-16 justify-center items-center pt-12 pb-16 ">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, translateY: -15, translateX: -15 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      translateX: 0,
                    }}
                    transition={{
                      transition: { duration: 0.9 + idx / 10 },
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                  >
                    <a
                      onClick={() => setIsOpen((prev) => !prev)}
                      className={""}
                      href={route.href}
                    >
                      <span className="text-brown-100 text-3xl hover:text-neutral-400">
                        {route.title}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;

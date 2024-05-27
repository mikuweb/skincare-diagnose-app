"use client";
import Link from "next/link";
import React, { FC } from "react";
import NavMobile from "./NavMobile";
import NavDesctop from "./NavDesctop";
import { motion } from "framer-motion";

const Header: FC = () => {
  return (
    <div className="h-16 px-3 flex justify-between items-center lg:px-5 lg:h-20">
      <motion.div
        initial={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
      >
        <Link href={"/"} className="text-xl font-english text-brown-100">
          Skin Care
        </Link>
      </motion.div>
      <NavMobile />
      <NavDesctop />
    </div>
  );
};

export default Header;

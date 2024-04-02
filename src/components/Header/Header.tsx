import Link from "next/link";
import React, { FC } from "react";
import NavMobile from "./NavMobile";
import NavDesctop from "./NavDesctop";

const Header: FC = () => {
  return (
    <div className="h-11 px-3 flex justify-between items-center lg:h-16">
      <Link href={"/"} className="text-xl font-english text-brown-100">
        Skin Care
      </Link>
      <NavMobile />
      <NavDesctop />
    </div>
  );
};

export default Header;

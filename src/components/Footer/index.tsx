import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative h-32 bg-leaf-100 p-3 flex justify-center items-center">
      <Link href={"/policy"}>プライバシーポリシー</Link>
      <p className="absolute right-0 left-0 h-fit bottom-3 text-white font-english text-center ">
        &copy; 2024 Miku Kawata All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

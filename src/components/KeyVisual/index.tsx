import React from "react";

const KeyVisual = () => {
  return (
    <>
      {/* Mobile */}
      <div
        className="md:hidden bg-no-repeat bg-cover flex flex-col gap-3 justify-end py-9 px-5 font-english text-white"
        style={{
          backgroundImage: `url('/images/kv.jpg')`,
          height: "60vh",
        }}
      >
        <h1 className="font-bold text-3xl">Skin Care</h1>
        <p className="text-xs">
          Your Personalized Skincare Journey.
          <br />
          Dive into Our AI-Powered Analysis for Customized Care!
        </p>
      </div>

      {/* Tablet, Desktop */}
      <div className="hidden md:flex gap-6 w-full h-[748px] pt-12 font-english text-brown-100 bg-beige-100">
        {/* 左 Title */}
        <div className="flex flex-col gap-6 w-1/2 justify-center px-8">
          <h1 className="font-bold text-6xl">Skin Care</h1>
          <p className="text-2xl">
            Your Personalized Skincare Journey.
            <br />
            Dive into Our AI-Powered Analysis for Customized Care!
          </p>
        </div>
        {/* 右 Key-visual */}
        <div
          className="w-1/2 bg-cover"
          style={{
            backgroundImage: `url('/images/kv.jpg')`,
          }}
        ></div>
      </div>
    </>
  );
};

export default KeyVisual;

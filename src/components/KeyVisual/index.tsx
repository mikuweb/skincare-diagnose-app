import React from "react";
import AnimatedText from "../Common/AnimatedText";

const KeyVisual = () => {
  return (
    <>
      {/* Mobile */}
      <div
        className="lg:hidden bg-no-repeat bg-cover flex flex-col gap-9 justify-end py-14 px-5 font-english text-white"
        style={{
          backgroundImage: `url('/images/kv.jpg')`,
          height: "60vh",
        }}
      >
        <AnimatedText
          text={["Grow up your", "skin with our", "AI-Powered Care"]}
          className="max-w-xl text-6xl leading-snug"
          el="h1"
          duration={0.5}
          split="char"
        />
        <AnimatedText
          text={[
            "You need to know your skin first and take proper care of your skin. We are here to help your skin grow.",
          ]}
          className="max-w-lg text-2xl leading-normal"
          el="p"
          duration={0.5}
          split="word"
        />
      </div>

      {/* Tablet, Desktop */}
      <div className="hidden lg:flex items-center h-[712px] w-full font-english text-brown-100 bg-beige-100">
        {/* 左 Title */}
        <div className="flex flex-col gap-8 w-1/2 justify-center pl-14">
          <AnimatedText
            text={["Grow up your", "skin with our", "AI-Powered Care"]}
            className="max-w-xl text-6xl leading-normal"
            el="h1"
            duration={0.5}
            delay={0.5}
            split="char"
          />
          <AnimatedText
            text={[
              "You need to know your skin first and take proper care of your skin. We are here to help your skin grow.",
            ]}
            className="max-w-lg text-xl leading-normal"
            el="p"
            duration={0.5}
            split="word"
          />
        </div>
        {/* 右 Key-visual */}
        <div
          className="w-1/2 bg-cover h-[712px]"
          style={{
            backgroundImage: `url('/images/kv.jpg')`,
          }}
        ></div>
      </div>
    </>
  );
};

export default KeyVisual;

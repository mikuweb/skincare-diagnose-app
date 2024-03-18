import React, { FC } from "react";

interface Props {
  imgSrc: string;
  description1: string;
  description2: string;
  btnText: string;
  movePage: () => void;
}

const ContentItem: FC<Props> = ({
  imgSrc,
  description1,
  description2,
  btnText,
  movePage,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/${imgSrc}')`,
        width: "270px",
        height: "304px",
      }}
      className="bg-no-repeat bg-cover rounded-3xl flex flex-col justify-end items-start  py-6 px-4 gap-4 cursor-pointer"
      onClick={movePage}
    >
      <p className="text-white text-xs text-left">
        {description1}
        <br />
        {description2}
      </p>
      <button
        type="button"
        className="bg-white py-1 px-4 rounded-lg text-xs text-brown-100 w-fit hover:opacity-80"
      >
        {btnText}
      </button>
    </div>
  );
};

export default ContentItem;

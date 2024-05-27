"use client";
import React from "react";
import ContentItem from "./ContentItem";
import { useRouter } from "next/navigation";

const Contents = () => {
  const router = useRouter();
  const movePage = (pageUrl: string) => {
    router.push(pageUrl);
  };

  return (
    <div className="py-7 px-4 text-sm text-center md:py-12 lg:flex lg:flex-row lg:justify-center lg:gap-9 lg:py-20">
      {/* 左 スキンケアアイテム画像 */}
      <img
        src="/images/skin-care-items.jpg"
        alt="スキンケアアイテム"
        sizes="100%"
        className="hidden w-full h-fit rounded-3xl lg:block lg:w-1/3"
      />

      {/* 右 コンテンツ */}
      <div className="lg:w-2/3 lg:flex lg:flex-col">
        <p className="font-title mb-6 mx-auto w-4/5 text-brown-100 text-lg md:mb-7 md:text-xl lg:text-3xl lg:w-full">
          あなたのお肌に
          <br className="md:hidden" />
          合わせたスキンケアで、
          <br className="md:hidden lg:block" />
          美しいお肌に。
        </p>
        <div className="flex flex-col items-center w-full gap-14 mx-auto md:flex-row md:gap-8 md:justify-center lg:gap-5 lg:h-full">
          <ContentItem
            imgSrc={"skin-type.jpg"}
            description1={"お肌に関する質問に答えて"}
            description2={"まずはあなたの肌タイプを診断"}
            btnText={"肌タイプ診断を受ける"}
            movePage={() => movePage("/skin-type")}
          />

          <ContentItem
            imgSrc={"skin-care-product.jpg"}
            description1={"お肌に関する質問に答えるだけで"}
            description2={"AI分析によるおすすめスキンケア成分を提案"}
            btnText={"スキンケア提案を受ける"}
            movePage={() => movePage("/skin-care-product")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contents;

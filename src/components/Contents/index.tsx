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
    <div className="py-7 px-4 text-sm text-center">
      <p className="mb-6">
        自分の肌タイプ・お悩みに合わせたスキンケアで美しいお肌に
      </p>
      <div className="flex flex-col items-center gap-14">
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
          btnText={"おすすめスキンケア診断を受ける"}
          movePage={() => movePage("/")}
        />
      </div>
    </div>
  );
};

export default Contents;

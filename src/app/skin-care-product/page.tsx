import Wizard, { QuestionType } from "@/components/Questions/Wizard";
import { NextPage } from "next";
import React from "react";
import { querySkinCareProduct } from "../actions";

const skinCareProductQuestions: QuestionType[] = [
  {
    id: 0,
    question: "今一番気になっているお肌の悩みに近いものを選んでください。",
    options: ["シミ", "毛穴", "ニキビ", "乾燥"],
  },
  {
    id: 1,
    question: "生活習慣で当てはまるものはありますか？",
    options: [
      "日焼け止めをあまり使わない/使わなかった",
      "炭水化物や甘いもの、脂っこい食べ物が好き",
      "季節の変わり目に肌が荒れやすい",
    ],
  },
  {
    id: 2,
    question: "普段お使いのスキンケアアイテムを教えてください",
    options: ["日焼け止め", "化粧水", "乳液", "クリーム", "美容液"],
  },
  {
    id: 3,
    question:
      "ここに質問が表示されます。ここに質問が表示されます。ここに質問が表示されます。",
    options: ["回答選択肢", "回答選択肢", "回答選択肢"],
  },
];

const SkinCareProductPage: NextPage = () => {
  return (
    <Wizard
      questionList={skinCareProductQuestions}
      bgImg="blue-flower_2.png"
      queryData={querySkinCareProduct}
    />
  );
};

export default SkinCareProductPage;

import Wizard, { QuestionType } from "@/components/Questions/Wizard";
import { NextPage } from "next";
import React from "react";
import { querySkinCareProduct } from "../actions";

const skinCareProductQuestions: QuestionType[] = [
  {
    id: 0,
    question: "今一番気になっているお肌の悩みに近いものを選んでください。",
    choices: ["シミ", "毛穴", "ニキビ", "乾燥"],
  },
  {
    id: 1,
    question:
      "ここに質問が表示されます。ここに質問が表示されます。ここに質問が表示されます。",
    choices: ["回答選択肢", "回答選択肢", "回答選択肢", "回答選択肢"],
  },
  {
    id: 2,
    question: "普段お使いのスキンケアアイテムを教えてください",
    choices: ["回答選択肢", "回答選択肢", "回答選択肢", "回答選択肢"],
  },
  {
    id: 3,
    question:
      "ここに質問が表示されます。ここに質問が表示されます。ここに質問が表示されます。",
    choices: ["回答選択肢", "回答選択肢", "回答選択肢", "回答選択肢"],
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

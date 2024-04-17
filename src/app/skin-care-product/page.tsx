import Wizard, { QuestionType } from "@/components/Questions/Wizard";
import { NextPage } from "next";
import React from "react";
import { querySkinCareProduct } from "../actions";

const skinCareProductQuestions: QuestionType[] = [
  {
    id: 0,
    question: "今一番気になっているお肌の悩みに近いものを選んでください。",
    options: [
      { answer: "シミ", prompt: "they hardly feel oily." },
      {
        answer: "毛穴",
        prompt: "I feel oiliness only in some parts like forehead and nose",
      },
      { answer: "ニキビ", prompt: "the whole area feels oily." },
      { answer: "乾燥", prompt: "the whole area feels oily." },
    ],
  },
  {
    id: 1,
    question:
      "ここに質問が表示されます。ここに質問が表示されます。ここに質問が表示されます。",
    options: [
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
    ],
  },
  {
    id: 2,
    question: "普段お使いのスキンケアアイテムを教えてください",
    options: [
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
    ],
  },
  {
    id: 3,
    question:
      "ここに質問が表示されます。ここに質問が表示されます。ここに質問が表示されます。",
    options: [
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
      { answer: "回答選択肢", prompt: "they hardly feel oily." },
    ],
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

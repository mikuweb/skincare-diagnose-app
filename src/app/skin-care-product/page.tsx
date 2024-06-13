import Wizard, { QuestionType } from "@/components/Questions/Wizard";
import { querySkinCareProduct } from "@/features/api/actions";
import { NextPage } from "next";
import React from "react";

const skinCareProductQuestions: QuestionType[] = [
  {
    id: 0,
    question: "あなたの肌質を教えてください",
    choices: ["乾燥肌", "脂性肌", "混合肌", "敏感肌", "わからない"],
  },
  {
    id: 1,
    question: "今一番気になっているお肌の悩みに近いものを選んでください。",
    choices: ["シミ", "シワ", "毛穴", "ニキビ", "乾燥", "くすみ"],
    // TODO: テキスト入力もできるようにする
    // その他（具体的な悩みがあれば教えてください）
  },
  {
    id: 2,
    question: "理想の肌はどのような状態ですか？",
    choices: [
      "ツヤツヤでハリのある肌",
      "シミやシワのない透明感のある肌",
      "ニキビのないなめらかな肌",
      "乾燥を感じないもちもちの肌",
      // TODO: テキスト入力もできるようにする
      // その他（具体的なイメージがあれば教えてください）
    ],
  },
  {
    id: 3,
    question: "アレルギーやアトピーなどの皮膚疾患はありますか？",
    choices: ["はい", "いいえ"],
  },
  {
    id: 4,
    question: "妊娠中・授乳中ですか？",
    choices: ["はい", "いいえ"],
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

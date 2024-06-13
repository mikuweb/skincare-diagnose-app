"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "process";

const API_KEY = env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("NEXT_PUBLIC_GEMINI_API_KEY");
}
const genAI = new GoogleGenerativeAI(API_KEY);

export async function querySkinType(reqestQuery: string[]) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  肌の専門家として、以下の質問への回答を参考に、質問者の肌質、肌の特徴、対策を出力フォーマットに沿って回答してください。

  Q:${reqestQuery[0]}
  A:${reqestQuery[1]}

  Q:${reqestQuery[2]}
  A:${reqestQuery[3]}

  Q:${reqestQuery[4]}
  A:${reqestQuery[5]}

  Q:${reqestQuery[6]}
  A:${reqestQuery[7]}

  出力フォーマット
  
  ## あなたの肌質：  ** 回答 **
  
  
  ## 特徴
    - 回答
    - 回答
  

  ## 対策
    - 回答（おすすめの製品は不要です）
    - 回答（おすすめの製品は不要です）
    `;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {
    return text;
  } catch (error) {
    console.error("エラー：", error);
  }
}

export async function querySkinCareProduct(reqestQuery: string[]) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  肌の専門家として、以下の質問への回答を参考に、質問者の肌悩みにあった科学的根拠のあるスキンケア成分と、その成分が配合されたおすすめの市販スキンケア商品を出力フォーマットに沿って回答してください。

  Q:${reqestQuery[0]}
  A:${reqestQuery[1]}

  Q:${reqestQuery[2]}
  A:${reqestQuery[3]}

  Q:${reqestQuery[4]}
  A:${reqestQuery[5]}

  Q:${reqestQuery[6]}
  A:${reqestQuery[7]}

  Q:${reqestQuery[8]}
  A:${reqestQuery[9]}

  出力フォーマット
  ## おすすめスキンケア成分：  ** 回答 **
  
  ## おすすめスキンケア商品
    - 回答
    - 回答
      `;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {
    return text;
  } catch (error) {
    console.error("エラー：", error);
  }
}

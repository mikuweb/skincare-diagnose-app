"use client";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answerIdx?: number;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 0,
      question: "あなたの肌のタイプは何ですか？",
      options: ["乾燥肌", "脂性肌", "混合肌", "敏感肌"],
    },
    {
      id: 1,
      question: "肌の主な悩みは何ですか？",
      options: ["しわやたるみ", "ニキビや吹き出物", "色素沈着やシミ", "毛穴"],
    },
    {
      id: 2,
      question: "日中の外出頻度はどの程度ですか？",
      options: ["頻繁に外出する", "時々外出する", "屋内が多い"],
    },
  ]);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<
    undefined | number
  >();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSelect = (selectedOptionIdx: number) => {
    setSelectedAnswerIdx(selectedOptionIdx);
    const newQuestion: Question[] = [...questions];
    const targetQuestion = questions.find((q) => q.id === activeQuestion)!;
    targetQuestion.answerIdx = selectedOptionIdx;
    setQuestions(newQuestion);
  };

  const backToPrevQ = () => {
    setSelectedAnswerIdx(undefined);
    setActiveQuestion(activeQuestion - 1);

    const newSelectedIdx = questions[activeQuestion - 1].answerIdx;
    setSelectedAnswerIdx(newSelectedIdx);
  };

  const goToNextQ = () => {
    setSelectedAnswerIdx(undefined);
    setActiveQuestion(activeQuestion + 1);
  };

  const submitAnswers = () => {
    setShowResult(true);
  };

  return (
    <main className="p-10">
      <h1 className="text-center mb-6 text-4xl ">AIスキンケア診断</h1>
      {showResult ? (
        <>
          <p className="text-center mb-6">結果</p>
          <div className="border border-cyan-900 flex flex-col gap-5 text-center w-3/5 mx-auto mb-6 p-7 ">
            {questions.map((question, idx) => (
              <>
                <p>{question.question}</p>
                <p>{question.options[question.answerIdx!]}</p>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-center mb-6">
            質問に答えてください: {activeQuestion + 1}/{questions.length}
          </p>
          <div className="border border-cyan-900 rounded-md flex flex-col gap-5 text-center w-3/5 mx-auto  mb-6 p-7 ">
            <p>{questions[activeQuestion].question}</p>
            <div className="w-full grid grid-cols-2 gap-4">
              {questions[activeQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  className={`${
                    selectedAnswerIdx === idx
                      ? "bg-cyan-300"
                      : "hover:bg-cyan-50"
                  } border border-steal-400 rounded-md py-2 px-3`}
                  onClick={() => handleSelect(idx)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex">
            <button
              type="button"
              className={`${
                activeQuestion === 0 ? "hidden" : ""
              } w-fit border border-steal-400 rounded-md mx-auto py-2 px-3 hover:bg-cyan-300`}
              onClick={backToPrevQ}
            >
              前の質問へ戻る
            </button>

            <button
              type="button"
              className={`${
                activeQuestion === questions.length - 1 ? "hidden" : ""
              } w-fit border border-steal-400 rounded-md mx-auto py-2 px-3 hover:bg-cyan-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50`}
              onClick={goToNextQ}
              disabled={selectedAnswerIdx === undefined}
            >
              次の質問へ
            </button>
            <button
              type="button"
              className={`${
                activeQuestion !== questions.length - 1 ? "hidden" : ""
              } w-fit border border-steal-400 rounded-md mx-auto py-2 px-3 hover:bg-cyan-300 disabled`}
              onClick={submitAnswers}
            >
              診断結果を見る（無料）
            </button>
          </div>
        </>
      )}
    </main>
  );
}

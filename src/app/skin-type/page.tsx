"use client";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answerIdx?: number;
}

const SkinType = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 0,
      question:
        "手の甲でTゾーン(おでこ・鼻)や頬を触ってみましょう。どこのベタつきが気になりますか？",
      options: [
        "ほとんど気にならない",
        "Tゾーンだけ気になる",
        "全体的に気になる",
      ],
    },
    {
      id: 1,
      question: "洗顔後に何も塗らない状態で肌のつっぱりを感じますか？",
      options: [
        "つっぱりは感じない",
        "少しつっぱりを感じる",
        "常につっぱりを感じる",
      ],
    },
    {
      id: 2,
      question: "肌が乾燥してかゆみや粉ふきが起こりますか？",
      options: ["頻繁に起こる", "時々起こる", "起こらない"],
    },
    {
      id: 3,
      question:
        "化粧品や外部刺激に対して肌が赤くなったり痛みを感じたり敏感に炎症を起こしますか？",
      options: ["頻繁に起こす", "時々起こす", "起こさない"],
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
    <main className="h-screen pt-12 px-5 bg-beige-100 font-english">
      {showResult ? (
        <>
          <p className="text-center mb-6">結果</p>
          <div className="border border-cyan-900 flex flex-col gap-5 text-center w-3/5 mx-auto mb-6 p-7 ">
            {questions.map((question, idx) => (
              <div key={idx}>
                <p>{question.question}</p>
                <p>{question.options[question.answerIdx!]}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-center">Progress barを表示する</div>
          <button
            className={`${activeQuestion === 0 ? "hidden" : ""} `}
            onClick={backToPrevQ}
          >
            ← Return
          </button>
          <div className="flex flex-col gap-10">
            {/* 質問 */}
            <div className="absolute left-0 right-0 w-64 h-64 mx-auto bg-beige-100 bg-opacity-60"></div>
            <div
              style={{
                backgroundImage: `url('/images/blue-flower_1.png')`,
                height: "256px",
                width: "256px",
              }}
              className="bg-no-repeat bg-cover bg-opacity-60 px-10 mx-auto flex flex-col gap-5 justify-center items-center "
            >
              <p className="text-leaf-300 text-xl z-10">
                Q{activeQuestion + 1}
              </p>
              <p className="text-center text-brown-10 text-sm z-10">
                {questions[activeQuestion].question}
              </p>
            </div>

            {/* 回答選択肢 */}
            <div className="flex flex-col gap-4">
              {questions[activeQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  className={` w-full rounded-md py-2 ${
                    selectedAnswerIdx === idx
                      ? "bg-leaf-100"
                      : "bg-white hover:opacity-60"
                  } `}
                  onClick={() => handleSelect(idx)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* 結果を表示するボタン */}
            <button
              type="button"
              className={`${
                activeQuestion === questions.length - 1 ? "hidden" : ""
              } w-fit rounded-md mx-auto py-2 px-3 bg-leaf-200 text-white hover:bg-opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50`}
              onClick={goToNextQ}
              disabled={selectedAnswerIdx === undefined}
            >
              次へ
            </button>
            <button
              type="button"
              className={`${
                activeQuestion !== questions.length - 1 ? "hidden" : ""
              } rounded-md mx-auto py-2 px-7 bg-leaf-300 text-white hover:bg-opacity-80 disabled`}
              onClick={submitAnswers}
            >
              結果を表示する（無料）
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default SkinType;

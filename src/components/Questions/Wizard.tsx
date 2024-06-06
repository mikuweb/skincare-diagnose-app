"use client";
import React, { FC, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import Loader from "../Common/Loader";
import Result from "./Result";

interface Props {
  questionList: QuestionType[];
  bgImg: string;
  queryData(request: string[]): Promise<string | undefined>;
}
export interface QuestionType {
  id: number;
  question: string;
  choices: string[];
  answerIdx?: number;
}

const Wizard: FC<Props> = ({ questionList, bgImg, queryData }) => {
  const [questions, setQuestions] = useState<QuestionType[]>(questionList);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<
    undefined | number
  >();
  const [resultData, setResultData] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lastQuestion = activeQuestion === questions.length - 1;

  const handleSelect = (selectedOptionIdx: number) => {
    setSelectedAnswerIdx(selectedOptionIdx);
    const newQuestion: QuestionType[] = [...questions];
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

  const submitAnswers = async () => {
    try {
      setIsLoading(true);

      const request = questions.reduce((acc, question) => {
        const q: string = question.question;
        const a: string = question.choices[question.answerIdx!];
        return [...acc, q, a];
      }, [] as string[]);

      const response = await queryData(request);
      setResultData(response);
      console.log(response);
    } catch (error) {
      console.error("エラー：", error);
    } finally {
      setIsLoading(false);
    }
    // TODO: ErrorハンドリングはServer側でやる？
  };

  return (
    <div className="lg:flex lg:h-screen lg:w-screen lg:justify-center lg:bg-leaf-100 lg:pt-14">
      <div className="h-screen bg-beige-100 px-5 pt-16 font-english lg:h-fit lg:w-2/3 lg:rounded-3xl lg:p-6">
        {/* <Loader /> */}
        {resultData === undefined ? (
          isLoading ? (
            <Loader />
          ) : (
            <>
              <button
                className={`${activeQuestion === 0 ? "hidden" : ""} `}
                onClick={backToPrevQ}
              >
                ← Back
              </button>

              <ProgressBar
                activeQuestion={activeQuestion}
                questions={questions}
              />

              <div className="flex flex-col gap-10">
                <Question
                  questions={questions}
                  activeQuestion={activeQuestion}
                  bgImg={bgImg}
                />
                <Answers
                  questions={questions}
                  activeQuestion={activeQuestion}
                  handleSelect={handleSelect}
                  selectedAnswerIdx={selectedAnswerIdx}
                />
                <Button
                  handleClick={lastQuestion ? submitAnswers : goToNextQ}
                  bgColor={lastQuestion ? "bg-leaf-300" : "bg-leaf-200"}
                  disabled={selectedAnswerIdx === undefined}
                >
                  {lastQuestion ? "結果を表示する（無料）" : "次へ"}
                </Button>
              </div>
            </>
          )
        ) : (
          <Result result={resultData} />
        )}
      </div>
    </div>
  );
};

export default Wizard;

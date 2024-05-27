"use client";
import React, { FC, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

interface Props {
  questionList: QuestionType[];
  bgImg: string;
  queryData(data: QuestionType[]): Promise<any>;
}
export interface QuestionType {
  id: number;
  question: string;
  options: { answer: string; prompt: string }[];
  answerIdx?: number;
}

const Wizard: FC<Props> = ({ questionList, bgImg, queryData }) => {
  const [questions, setQuestions] = useState<QuestionType[]>(questionList);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<
    undefined | number
  >();

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
    console.log(questions);
    const response = await queryData(questions);
    console.log(response);
  };

  return (
    <div className="lg:flex lg:h-screen lg:w-screen lg:justify-center lg:bg-leaf-100 lg:pt-14">
      <div className="h-screen bg-beige-100 px-5 pt-16 font-english lg:h-fit lg:w-2/3 lg:rounded-3xl lg:p-6">
        {/* <Loader /> */}
        <button
          className={`${activeQuestion === 0 ? "hidden" : ""} `}
          onClick={backToPrevQ}
        >
          ← Back
        </button>

        <ProgressBar activeQuestion={activeQuestion} questions={questions} />

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
      </div>
    </div>
  );
};

export default Wizard;

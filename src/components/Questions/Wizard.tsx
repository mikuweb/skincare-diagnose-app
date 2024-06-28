"use client";
import React, { FC, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import Loader from "../Common/Loader";
import Result from "./Result";
import { useMutation } from "@tanstack/react-query";
import WizardContainer from "./WizardContainer";

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

  const mutation = useMutation({
    mutationFn: queryData,
  });

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
    const request = questions.reduce((acc, question) => {
      const q: string = question.question;
      const a: string = question.choices[question.answerIdx!];
      return [...acc, q, a];
    }, [] as string[]);

    mutation.mutate(request);
  };

  if (mutation.isPending) {
    return (
      <WizardContainer>
        <Loader />
      </WizardContainer>
    );
  }

  if (mutation.data !== undefined && lastQuestion) {
    return (
      <WizardContainer>
        <Result result={mutation.data} />
      </WizardContainer>
    );
  }

  if (mutation.isError) {
    return (
      <WizardContainer>
        <p>
          エラーが発生しました。申し訳ありませんが、もう一度やり直してください。
        </p>
      </WizardContainer>
    );
  }

  return (
    <WizardContainer>
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
    </WizardContainer>
  );
};

export default Wizard;

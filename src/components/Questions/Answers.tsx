import React, { FC } from "react";
import { QuestionType } from "./Wizard";

interface Props {
  questions: QuestionType[];
  activeQuestion: number;
  selectedAnswerIdx?: number;
  handleSelect: (id: number) => void;
}

const Answers: FC<Props> = ({
  questions,
  activeQuestion,
  selectedAnswerIdx,
  handleSelect,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {questions[activeQuestion].options.map((option, idx) => (
        <button
          key={idx}
          className={`w-full md:w-2/4 lg:w-2/3 mx-auto rounded-md py-2 ${
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
  );
};

export default Answers;

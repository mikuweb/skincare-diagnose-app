import React, { FC } from "react";
import { QuestionType } from "./Wizard";

interface Props {
  questions: QuestionType[];
  activeQuestion: number;
}

const Question: FC<Props> = ({ questions, activeQuestion }) => {
  return (
    <>
      <div className="absolute left-0 right-0 w-64 h-64 mx-auto bg-beige-100 bg-opacity-60"></div>
      <div
        style={{
          backgroundImage: `url('/images/blue-flower_1.png')`,
          height: "256px",
          width: "256px",
        }}
        className="bg-no-repeat bg-cover bg-opacity-60 px-10 mx-auto flex flex-col gap-5 justify-center items-center "
      >
        <p className="text-leaf-300 text-xl z-10">Q{activeQuestion + 1}</p>
        <p className="text-center text-brown-10 text-sm z-10">
          {questions[activeQuestion].question}
        </p>
      </div>
    </>
  );
};

export default Question;

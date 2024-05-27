"use client";

import React, { FC, useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import { QuestionType } from "./Wizard";

type Props = {
  activeQuestion: number;
  questions: QuestionType[];
};

const ProgressBar: FC<Props> = ({ activeQuestion, questions }) => {
  const [progress, setProgress] = useState<number>(0);

  const numOfQuestion = questions.length - 1;
  const progressRate = (activeQuestion / numOfQuestion) * 100;

  useEffect(() => {
    setProgress(progressRate);
  }, [activeQuestion]);

  return (
    <div className="text-center">
      <p>{`${activeQuestion + 1} / ${questions.length}`}</p>
      <Progress.Root
        className="bg-blackA6 relative mx-auto mb-6 h-6 w-4/5 overflow-hidden rounded-full"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-leaf-200 transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
};

export default ProgressBar;

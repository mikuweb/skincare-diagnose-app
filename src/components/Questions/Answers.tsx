import React, { FC } from "react";
import { QuestionType } from "./Wizard";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  questions: QuestionType[];
  activeQuestion: number;
  selectedAnswerIdx?: number;
  handleSelect: (id: number) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    translateY: -10,
    transition: { duration: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, translateY: 10, transition: { duration: 1 } },
  show: { opacity: 1, translateY: 0, transition: { duration: 1 } },
};

const Answers: FC<Props> = ({
  questions,
  activeQuestion,
  selectedAnswerIdx,
  handleSelect,
}) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        variants={container}
        key={questions[activeQuestion].question}
        exit="exit"
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {questions[activeQuestion].choices.map((choice, idx) => (
          <motion.button
            variants={item}
            key={idx}
            className={`mx-auto w-full rounded-md py-2 md:w-2/4 lg:w-2/3 ${
              selectedAnswerIdx === idx
                ? "bg-leaf-100"
                : "bg-white hover:opacity-60"
            } `}
            onClick={() => handleSelect(idx)}
          >
            {choice}
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Answers;

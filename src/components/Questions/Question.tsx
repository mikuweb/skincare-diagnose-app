import React, { FC } from "react";
import { QuestionType } from "./Wizard";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  questions: QuestionType[];
  activeQuestion: number;
}

const Question: FC<Props> = ({ questions, activeQuestion }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/blue-flower_1.png')`,
          height: "256px",
          width: "256px",
        }}
        className="relative bg-no-repeat bg-cover bg-opacity-60 px-10 mx-auto flex flex-col gap-5 justify-center items-center "
      >
        <AnimatePresence initial={false}>
          <motion.p
            key={questions[activeQuestion].question + "1"}
            initial={{ opacity: 0, translateY: 15 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            exit={{
              opacity: 0,
              translateY: -10,
              transition: { duration: 0.2 },
            }}
            className="text-leaf-300 text-xl absolute top-16"
          >
            Q{activeQuestion + 1}
          </motion.p>
          <motion.p
            key={questions[activeQuestion].question}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            exit={{
              opacity: 0,
              translateY: -10,
              transition: { duration: 0.2 },
            }}
            className="w-40 text-center text-brown-10 text-sm absolute top-28"
          >
            {questions[activeQuestion].question}
          </motion.p>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Question;

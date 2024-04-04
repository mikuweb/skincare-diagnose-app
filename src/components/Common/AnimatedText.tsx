"use client";
import React, { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className: string;
  once?: boolean;
  duration: number;
  delay?: number;
  split: "word" | "char";
}

const AnimatedText: FC<Props> = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  duration,
  delay,
  split,
}) => {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration },
      // TODO: delayを設定したい
      //   transition: { duration: duration, delay: delay || 0 },
    },
  };

  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05, duration }}
        aria-hidden
      >
        {textArray.map((line, i) => (
          <span key={i} className="block">
            {line.split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {split === "char" ? (
                  word.split("").map((char, i) => (
                    <motion.span
                      ref={ref}
                      className="inline-block"
                      variants={defaultAnimation}
                      key={i}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : (
                  <motion.span
                    ref={ref}
                    className="inline-block"
                    variants={defaultAnimation}
                    key={i}
                  >
                    {word}
                  </motion.span>
                )}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;

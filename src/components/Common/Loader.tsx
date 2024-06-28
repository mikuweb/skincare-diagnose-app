import React from "react";
import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  repeat: Infinity,
  repeatType: "reverse" as const,
  duration: 0.5,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center pt-20">
        <motion.div
          className="flex h-20 w-32 justify-around"
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            className="block h-6 w-6 rounded-full bg-leaf-200"
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className="block h-6 w-6 rounded-full bg-leaf-200"
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            className="block h-6 w-6 rounded-full bg-leaf-200"
            variants={DotVariants}
            transition={DotTransition}
          />
        </motion.div>
      </div>
      <p className="mt-9 block text-center text-xl">結果を分析中です...</p>
    </>
  );
};

export default Loader;

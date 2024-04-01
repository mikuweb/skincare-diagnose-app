import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  handleClick: () => void;
  children: ReactNode;
  bgColor: string;
  disabled: boolean;
}

const Button: FC<Props> = ({ handleClick, children, bgColor, disabled }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.97 }}
      type="button"
      className={`${bgColor} rounded-md mx-auto py-2 px-7 text-white hover:bg-opacity-80  disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;

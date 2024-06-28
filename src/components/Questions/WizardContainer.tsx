import React from "react";
import { FC } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const WizardContainer: FC<Props> = ({ children }) => {
  return (
    <div className="lg:flex lg:h-screen lg:w-screen lg:justify-center lg:bg-leaf-100 lg:pt-14">
      <div className="h-screen bg-beige-100 px-5 pt-16 font-english lg:h-fit lg:w-2/3 lg:rounded-3xl lg:p-6">
        {children}
      </div>
    </div>
  );
};

export default WizardContainer;

import Wizard from "@/components/Questions/Wizard";
import { querySkinCareProduct } from "@/features/api/actions";
import { skinCareProductQuestions } from "@/lib/questions";
import { NextPage } from "next";
import React from "react";

const SkinCareProductPage: NextPage = () => {
  return (
    <Wizard
      questionList={skinCareProductQuestions}
      bgImg="blue-flower_2.png"
      queryData={querySkinCareProduct}
    />
  );
};

export default SkinCareProductPage;

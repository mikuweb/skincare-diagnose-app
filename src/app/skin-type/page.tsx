import Wizard from "@/components/Questions/Wizard";
import { NextPage } from "next";
import { querySkinType } from "@/features/api/actions";
import { skinTypeQuestions } from "@/lib/questions";

const SkinTypePage: NextPage = () => {
  return (
    <Wizard
      questionList={skinTypeQuestions}
      bgImg="blue-flower_1.png"
      queryData={querySkinType}
    />
  );
};

export default SkinTypePage;

import Wizard from "@/components/Questions/Wizard";
import { QuestionType } from "@/components/Questions/Wizard";
import { NextPage } from "next";
import { querySkinType } from "../actions";

const SkinTypePage: NextPage = () => {
  const skinTypeQuestions: QuestionType[] = [
    {
      id: 0,
      question:
        "手の甲でTゾーン(おでこ・鼻)や頬を触ってみましょう。どこのベタつきが気になりますか？",
      options: [
        "ほとんど気にならない",
        "Tゾーンだけ気になる",
        "全体的に気になる",
      ],
    },
    {
      id: 1,
      question: "洗顔後に何も塗らない状態で肌のつっぱりを感じますか？",
      options: [
        "つっぱりは感じない",
        "少しつっぱりを感じる",
        "常につっぱりを感じる",
      ],
    },
    {
      id: 2,
      question: "肌が乾燥してかゆみや粉ふきが起こりますか？",
      options: ["頻繁に起こる", "時々起こる", "起こらない"],
    },
    {
      id: 3,
      question:
        "化粧品や外部刺激に対して肌が赤くなったり痛みを感じたり敏感に炎症を起こしますか？",
      options: ["頻繁に起こす", "時々起こす", "起こさない"],
    },
  ];

  return (
    <Wizard
      questionList={skinTypeQuestions}
      bgImg="blue-flower_1.png"
      queryData={querySkinType}
    />
  );
};

export default SkinTypePage;

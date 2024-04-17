import Wizard from "@/components/Questions/Wizard";
import { QuestionType } from "@/components/Questions/Wizard";
import { NextPage } from "next";
import { querySkinType } from "../actions";

const SkinTypePage: NextPage = () => {
  const skinTypeQuestions: QuestionType[] = [
    {
      id: 0,
      // When I touch my forehead, nose and cheeks with the back of my hand,
      question:
        "手の甲でTゾーン(おでこ・鼻)や頬を触ってみましょう。どこのベタつきが気になりますか？",
      options: [
        { answer: "ほとんど気にならない", prompt: "they hardly feel oily." },
        {
          answer: "Tゾーンだけ気になる",
          prompt: "I feel oiliness only in some parts like forehead and nose",
        },
        { answer: "全体的に気になる", prompt: "the whole area feels oily." },
      ],
    },
    {
      id: 1,
      question: "洗顔後に何も塗らない状態で肌のつっぱりを感じますか？",
      // My skin ${} when nothing is applied after cleansing
      options: [
        {
          answer: "つっぱりは感じない",
          prompt: "don't feel any skin tightness",
        },
        { answer: "少しつっぱりを感じる", prompt: "feel a little tightness" },
        { answer: "常につっぱりを感じる", prompt: "always feel tightness" },
      ],
    },
    {
      id: 2,
      question: "肌が乾燥してかゆみや粉ふきが起こりますか？",
      // My skin
      options: [
        { answer: "頻繁に起こる", prompt: "is always dry" },
        { answer: "時々起こる", prompt: "gets dry sometimes" },
        { answer: "起こらない", prompt: "is not dry" },
      ],
    },
    {
      id: 3,
      question:
        "化粧品や外部刺激に対して肌が赤くなったり痛みを感じたり敏感に炎症を起こしますか？",
      // My skin ${} red, sore and sensitive to cosmetics and external stimuli
      options: [
        {
          answer: "頻繁に起こす",
          prompt: "frequently becomes",
        },
        { answer: "時々起こす", prompt: "sometimes becomes" },
        { answer: "起こさない", prompt: "is not" },
      ],
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

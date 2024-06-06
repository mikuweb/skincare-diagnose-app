import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  result: string;
};

const Result: FC<Props> = ({ result }) => {
  return (
    <div>
      <ReactMarkdown>{result}</ReactMarkdown>
    </div>
  );
};

export default Result;

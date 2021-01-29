import React from "react";
import ReactMarkdown from "react-markdown";
import Tex from "@matejmazur/react-katex";
import RemarkMathPlugin from "remark-math";
import "katex/dist/katex.min.css";

import CodeBlock from "../components/CodeBlock";
import debounceRender from "react-debounce-render";

const MarkdownRender = (props) => {
  const newProps = {
    ...props,
    escapeHtml: false,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      inlineMath: ({ value }) => <Tex math={value} />,
      math: ({ value }) => <Tex block math={value} />,
      code: (_props) => <CodeBlock {..._props}></CodeBlock>,
    },
  };
  return <ReactMarkdown {...newProps} />;
};

export default debounceRender(MarkdownRender, 500);

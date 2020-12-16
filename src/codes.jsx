import React from "react";
import { Button, message, Collapse } from "antd";

import marked from "marked";
import hljs from "highlight.js";

import { copy } from "./utils";

const formatCodeToMarkDown = (code, lang) => `\`\`\`${lang}\n${code}\`\`\`\n`;

const { Panel } = Collapse;

export default function Codes({ codes, renderHeader }) {
  return (
    <Collapse>
      {codes.map((c) => (
        <Panel
          key={c.text}
          header={
            <div className="row">
              <span className="language language-js">{c.language}</span>
              <Button
                type="primary"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  copy(c.text, () => {
                    message.success("复制成功～");
                  });
                }}
              >
                复制
              </Button>

              {renderHeader && renderHeader()}
            </div>
          }
        >
          <div
            dangerouslySetInnerHTML={{
              __html: marked(formatCodeToMarkDown(c.text, c.language), {
                renderer: new marked.Renderer(),
                highlight: function () {
                  const validLanguage = c.language;
                  return hljs.highlight(validLanguage, c.text).value;
                },
                pedantic: false,
                gfm: true,
                langPrefix: c.language,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false,
              }),
            }}
          ></div>
        </Panel>
      ))}
    </Collapse>
  );
}

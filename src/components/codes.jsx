import React from "react";
import { Button, message, Collapse } from "antd";

import CodeBlock from "./CodeBlock";

import { copy } from "../utils";
import { t } from "../locales";

const { Panel } = Collapse;

export default function Codes({ codes, renderHeader }) {
  return (
    <Collapse>
      {codes.map((c) => (
        <Panel
          key={c.text}
          header={
            <div style={{ display: "inline-block" }}>
              <span className="language language-js">{c.language}</span>
              <Button
                type="primary"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  copy(c.text, () => {
                    message.success(t("Locale.app.copySuccess"));
                  });
                }}
              >
                {t("Locale.app.copy")}
              </Button>

              {renderHeader && renderHeader()}
            </div>
          }
        >
          <CodeBlock value={c.text} language={c.language}></CodeBlock>
        </Panel>
      ))}
    </Collapse>
  );
}

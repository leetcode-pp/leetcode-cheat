import React from "react";
import { Button, Collapse, Tabs } from "antd";
import Codes from "../components/codes";

import {
  LEETCODE_CN_URL,
  CONTRIBUTE_PROGRAMMING_LANGUAGE_URL,
} from "../constant/index";

const { TabPane } = Tabs;
const { Panel } = Collapse;

function computedURL(problem) {
  if (problem.id.startsWith("http://") || problem.id.startsWith("https://"))
    return problem.id;
  return `${LEETCODE_CN_URL}/problems/${problem.id}`;
}

export default function CodeTemplate({ tempaltes }) {
  return (
    <div>
      <Tabs>
        {tempaltes.map((tempalte) => (
          <TabPane
            tab={
              <div>
                {tempalte.title}
                <img
                  alt={tempalte.title}
                  style={
                    tempalte.logo
                      ? { margin: "0 0 0 10px" }
                      : { display: "none" }
                  }
                  src={tempalte.logo}
                  className="problem-icon"
                />
              </div>
            }
            key={tempalte.title}
          >
            {tempalte.link && (
              <div>
                建议先学会之后再用模板。 如果你还不会的话，可以看看这篇
                <Button type="link" href={tempalte.link} target="_blank">
                  文章
                </Button>
                哦~
              </div>
            )}
            {tempalte.list.map(({ text, problems, codes }) => (
              <Collapse key={text}>
                <Panel header={<span>{text}</span>} key={text}>
                  <div style={problems.length > 0 ? {} : { display: "none" }}>
                    推荐题目：
                    <ul>
                      {problems.map((problem) => (
                        <li key={problem.title}>
                          <Button type="text">{problem.title}</Button>
                          <Button
                            onClick={(e) => e.stopPropagation()}
                            type="link"
                            href={computedURL(problem)}
                            target="_blank"
                            size="small"
                            style={{ marginLeft: "10px" }}
                          >
                            去默写
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Codes codes={codes} />
                  <Button
                    type="link"
                    href={CONTRIBUTE_PROGRAMMING_LANGUAGE_URL}
                  >
                    纠错 or 贡献其他语言
                  </Button>
                </Panel>
              </Collapse>
            ))}
          </TabPane>
        ))}

        <TabPane tab="更多模板后续陆续更新" key="more" disabled></TabPane>
      </Tabs>
    </div>
  );
}

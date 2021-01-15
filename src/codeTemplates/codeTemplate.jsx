import React from "react";
import { Button, Collapse, Tabs } from "antd";

import Codes from "../codes";

import {
  LEETCODE_CN_URL,
  CONTRIBUTE_PROGRAMMING_LANGUAGE_URL,
} from "../constant/index";

const { TabPane } = Tabs;
const { Panel } = Collapse;

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
                <Panel header={<div>{text}</div>} key={text}>
                  <div>
                    推荐题目：
                    <ul>
                      {problems.map((problem) => (
                        <li key={problem.title}>
                          <Button type="text">{problem.title}</Button>
                          <Button
                            onClick={(e) => e.stopPropagation()}
                            type="link"
                            href={`${LEETCODE_CN_URL}/problems/${problem.id}`}
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

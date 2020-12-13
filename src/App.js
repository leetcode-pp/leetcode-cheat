import React, { useState } from "react";
import { Button, Table, Empty, Collapse, Tabs } from "antd";

import "highlight.js/styles/github.css";

import db from "./db/db";
import collectionLogo from "./imgs/collection.svg";
import viewLogo from "./imgs/view.svg";

import {
  LEETCODE_CN_URL,
  LEETCODE_URL,
  CONTRIBUTE_PROGRAMMING_LANGUAGE_URL,
} from "./constant/index";
// import TestCase from "./testCase";
import ProblemDetail from "./Detail";
import TagOrLink from "./TagOrLink";
import tempaltes from "./codeTemplates/index";
import Codes from "./codes";
// import { bfs } from "./utils";
// import drawTree from "canvas-binary-tree";
import "antd/dist/antd.css";
import "./App.css";
// import { data as a } from "./db/binary-tree";

const { problems, selected } = db;
const { TabPane } = Tabs;
const { Panel } = Collapse;
const dataSource = Object.values(problems);

function inLeetCodeWebsite(url) {
  return [LEETCODE_CN_URL, LEETCODE_URL].some((u) => url.includes(u));
}

const columns = [
  {
    title: "题目",
    dataIndex: "name",
    width: "300",
    align: "center",
    render: (name, row) => (
      <Button
        type="link"
        href={`${LEETCODE_CN_URL}/problems/${name}/`}
        target="_blank"
      >
        {row.id}.{name}
      </Button>
    ),
  },
  {
    title: "标签",
    dataIndex: "pre",
    align: "center",
    render: (tags) => (
      <div>
        {(tags || []).map((tag) => {
          return (
            <TagOrLink
              style={{
                width: "100px",
                display: "inline-block",
                margin: "4px 0",
              }}
              key={tag.text}
              text={tag.text}
              link={tag.link}
              color={tag.color}
            />
          );
        })}
      </div>
    ),
  },
];

function App() {
  // eslint-disable-next-line
  chrome.tabs &&
    // eslint-disable-next-line
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      const match = currentUrl.match(/problems\/(.+?)\//);
      const problemId = match && match[1];
      setProblemId(problemId);
      setHasSolution(!!problems[problemId]);
      setInSelected(!!selected[problemId]);
      setInLeetCode(inLeetCodeWebsite(currentUrl));
    });

  // setTimeout(() => {
  //   setProblemId("uncrossed-lines");
  //   // setProblemId("two-sum");
  //   setInSelected(!!selected[problemId]);
  //   setHasSolution(!!problems[problemId]);
  // }, 1000);

  const [problemId, setProblemId] = useState("");

  const [hasSolution, setHasSolution] = useState(false);
  const [inSelected, setInSelected] = useState(false); // 是否被精选题解（其实就是合集）收录
  const [page, setPage] = useState("");
  const [inLeetCode, setInLeetCode] = useState(true);

  if (!inLeetCode) return window.open(LEETCODE_CN_URL + "/problemset/all/");

  // setTimeout(() => {
  //   const canvas = document.querySelector("#canvas");

  //   drawTree(canvas, bfs([1, 2, 2, 3, 1, 2, 2, 323213213232329]));
  // }, 1000);
  // console.log(a);

  return (
    <div className="container">
      <div
        className="tree-vis"
        style={{
          display: "none",
          position: "fixed",
          zIndex: 99,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,.4)",
        }}
      >
        <div>{/* <pre>{a}</pre> */}</div>
        <canvas width="1000" height="1000" id="canvas"></canvas>
      </div>

      <div>
        <div className="guide">
          {page !== "" ? (
            <Button type="link" onClick={() => setPage("")}>
              回到首页
            </Button>
          ) : (
            ""
          )}
          {hasSolution && page === "" ? (
            <Button type="link" onClick={() => setPage("detail")}>
              查看本题题解
              <img
                src={viewLogo}
                className="problem-icon"
                style={{ margin: "0 0 0 10px" }}
              />
            </Button>
          ) : (
            ""
          )}

          {!hasSolution &&
            page !== "allSolutions" &&
            (inSelected ? (
              <Button
                type="link"
                target="_blank"
                href={selected[problemId].url}
              >
                该题已被收录到精选合集《{selected[problemId].title}》点击查看
                <img
                  src={collectionLogo}
                  className="problem-icon"
                  style={{ margin: "0 0 0 10px" }}
                />
              </Button>
            ) : (
              <Button type="link" onClick={() => setPage("allSolutions")}>
                本题暂未被力扣加加收录，点击查看所有已收录题目~
              </Button>
            ))}

          <div style={page === "" ? {} : { display: "none" }}>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              代码模板
            </h2>
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
                      建议先学会之后再用模板。 如果你还不会的话，可以看看我的
                      <Button type="link" href={tempalte.link} target="_blank">
                        文章
                      </Button>
                      哦~
                    </div>
                  )}
                  {tempalte.list.map(({ text, problems, codes }) => (
                    <Collapse>
                      <Panel header={<div>{text}</div>} key={text}>
                        <div>
                          推荐题目：
                          <ul>
                            {problems.map((problem) => (
                              <li>
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
        </div>

        {page === "detail" && <ProblemDetail problemId={problemId} />}
      </div>

      <div style={page === "allSolutions" ? {} : { display: "none" }}>
        <Empty description="正在撰写题解...">
          <div className="row" style={{ marginTop: "20px" }}>
            所有已收录的题目
          </div>
          <Table
            pagination={{ hideOnSinglePage: true }}
            dataSource={dataSource}
            rowKey="id"
            columns={columns}
          />
        </Empty>
      </div>
    </div>
  );
}

export default App;

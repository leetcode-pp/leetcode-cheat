import React, { useState } from "react";
import { Button, Table, Empty, Tabs, Image } from "antd";

import "highlight.js/styles/github.css";

import db from "./db/db";
import collectionLogo from "./imgs/collection.svg";
import viewLogo from "./imgs/view.svg";

import { LEETCODE_CN_URL, LEETCODE_URL } from "./constant/index";
// import TestCase from "./testCase";
import ProblemDetail from "./Detail";
import Roadmap from "./roadmap/roadmap.jsx";
import TagOrLink from "./TagOrLink";
import tempaltes from "./codeTemplates/index";
import checkUpdate from "./checkUpdates";

// import { bfs } from "./utils";
// import drawTree from "canvas-binary-tree";
import "antd/dist/antd.css";
import "./App.css";
import CodeTemplates from "./codeTemplates/codeTemplate";
import ComplexityRating from './complexityRating/index'
// import { data as a } from "./db/binary-tree";

const { problems, selected } = db;

const { TabPane } = Tabs;

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
  //   // setProblemId("uncrossed-lines");
  //   setProblemId("two-sum");
  //   // setInSelected(!!selected[problemId]);
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

      <div className="guide-wrapper">
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

      {page === "" && (
        <Tabs type="card">
          <TabPane key="app" tab="代码模板">
            <CodeTemplates page={page} tempaltes={tempaltes}></CodeTemplates>
          </TabPane>
          <TabPane key="complexityRating" tab="复杂度速查">
            <ComplexityRating />
          </TabPane>
          <TabPane key="roadmap" tab="学习路线">
            <Roadmap />
          </TabPane>
          <TabPane key="checkUpdate" tab="检查更新">
            <div>
              一般只要你开启了自动更新，那么当插件更新之后
              chrome会在五个小时以内自动更新。
              如果你想第一时间更新，或者您禁用了自动更新，都可以在这里检测最新版。
            </div>
            <Button
              style={{ margin: "20px 0 0 20px" }}
              type="primary"
              onClick={checkUpdate}
            >
              检查更新
            </Button>
          </TabPane>
          <TabPane key="about" tab="关于我">
            <div>
              作者是一个 Github 40K star 的前端架构师，leetcode 刷题插件
              leetcode-cheatsheet
              作者，掌握各种算法套路，写了十几万字的算法刷题套路电子书，公众号回复
              <b>电子书</b>获取。
              <Image src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfcuzagjalj30p00dwabs.jpg"></Image>
            </div>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
}

export default App;

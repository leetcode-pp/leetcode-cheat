import React, { useState, Suspense, useEffect } from "react";
import { Button, Table, Empty, Tabs, Image } from "antd";

import "highlight.js/styles/github.css";

import db from "./db/db";
import collectionLogo from "./imgs/collection.svg";
import viewLogo from "./imgs/view.svg";

import { LEETCODE_CN_URL } from "./constant/index";
// import TestCase from "./testCase";
import ProblemDetail from "./Detail";
import Roadmap from "./roadmap/roadmap.jsx";
import TagOrLink from "./components/TagOrLink";
import tempaltes from "./codeTemplates/index";
import checkUpdate from "./checkUpdates";

import { isInExtension, getUrlParameter } from "./utils";
// import drawTree from "canvas-binary-tree";
import "antd/dist/antd.css";
import "./App.css";
import CodeTemplates from "./codeTemplates/codeTemplate";
import ComplexityRating from "./complexityRating/index";
import SolutionTemplate from "./solutionTemplate/index";
import Locale, { initLang } from "./locales";
// import { data as a } from "./db/binary-tree";

const DataStrutureVis = isInExtension()
  ? null
  : React.lazy(() => import("./dataStructureVis"));

const { problems, selected } = db;

const { TabPane } = Tabs;

const dataSource = Object.values(problems);
const chrome = window.chrome;

// function inLeetCodeWebsite(url) {
//   return [LEETCODE_CN_URL, LEETCODE_URL].some((u) => url.includes(u));
// }

const columns = [
  {
    title: Locale.app.allSolutions.columns.title,
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
    title: Locale.app.allSolutions.columns.tag,
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
const initialTab = getUrlParameter("tab") || "code-template";
function App() {
  // eslint-disable-next-line
  chrome &&
    chrome.tabs &&
    // eslint-disable-next-line
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      const match = currentUrl.match(/problems\/(.+?)\//);
      const problemId = match && match[1];
      setProblemId(problemId);
      setHasSolution(!!problems[problemId]);
      setInSelected(!!selected[problemId]);
      // setInLeetCode(inLeetCodeWebsite(currentUrl));
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
  const [tab, setTab] = useState(initialTab);

  // const [inLeetCode, setInLeetCode] = useState(true);

  // if (!inLeetCode) return window.open(LEETCODE_CN_URL + "/problemset/all/");

  // setTimeout(() => {
  //   const canvas = document.querySelector("#canvas");

  //   drawTree(canvas, bfs([1, 2, 2, 3, 1, 2, 2, 323213213232329]));
  // }, 1000);
  // console.log(a);

  useEffect(() => {
    initLang();
  })
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
      {isInExtension() && (
        <>
          <div className="guide-wrapper">
            <div className="guide">
              {page !== "" ? (
                <Button type="link" onClick={() => setPage("")}>
                  {Locale.app.back}
                </Button>
              ) : (
                ""
              )}
              {hasSolution && page === "" ? (
                <Button type="link" onClick={() => setPage("detail")}>
                  {Locale.app.viewSolution}
                  <img
                    src={viewLogo}
                    alt="view-solution"
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
                    {Locale.app.viewInHandpickCollection(
                      selected[problemId].title
                    )}
                    <img
                      alt="view-solutions"
                      src={collectionLogo}
                      className="problem-icon"
                      style={{ margin: "0 0 0 10px" }}
                    />
                  </Button>
                ) : (
                  <Button type="link" onClick={() => setPage("allSolutions")}>
                    {Locale.app.notCollected}
                  </Button>
                ))}
            </div>
            {page === "detail" && <ProblemDetail problemId={problemId} />}
          </div>

          <div style={page === "allSolutions" ? {} : { display: "none" }}>
            <Empty description={Locale.app.writingExplanation}>
              <div className="row" style={{ marginTop: "20px" }}>
                {Locale.app.allCollected}
              </div>
              <Table
                pagination={{ hideOnSinglePage: true }}
                dataSource={dataSource}
                rowKey="id"
                columns={columns}
              />
            </Empty>
          </div>
        </>
      )}
      {page === "" && (
        <Tabs type="card" activeKey={tab} onChange={setTab}>
          <TabPane key="code-template" tab={Locale.codeTemplateTab.name}>
            <CodeTemplates tempaltes={tempaltes}></CodeTemplates>
          </TabPane>
          <TabPane
            key="data-structure-vis"
            tab={Locale.dataStructureVisualizationTab.name}
          >
            {isInExtension() ? (
              <Button
                type="link"
                target="_blank"
                href="https://leetcode-pp.github.io/leetcode-cheat/?tab=data-structure-vis"
              >
                {Locale.app.goToTheWebsiteToUse}
              </Button>
            ) : (
              <Suspense fallback={<div>Loading...</div>}>
                <DataStrutureVis></DataStrutureVis>
              </Suspense>
            )}
          </TabPane>
          {!isInExtension() && (
            <TabPane
              key="solution-template"
              tab={Locale.explanationTemplateTab.name}
            >
              <SolutionTemplate></SolutionTemplate>
            </TabPane>
          )}

          <TabPane
            key="complexityRating"
            tab={Locale.complexityQuickCheckTab.name}
          >
            <ComplexityRating />
          </TabPane>
          <TabPane key="roadmap" tab={Locale.learningRouteTab.name}>
            <Roadmap />
          </TabPane>
          {isInExtension() && (
            <TabPane key="checkUpdate" tab={Locale.checkForUpdatesTab.name}>
              <div>{Locale.app.checkTips}</div>
              <Button
                style={{ margin: "20px 0 0 20px" }}
                type="primary"
                onClick={checkUpdate}
              >
                {Locale.app.checkBtn}
              </Button>
            </TabPane>
          )}

          <TabPane key="about" tab={Locale.aboutMeTab.name}>
            <div>
              <div>{Locale.app.selfIntroduction}</div>
              <Image src="https://p.ipic.vip/h9nm77.jpg"></Image>
            </div>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
}

export default App;

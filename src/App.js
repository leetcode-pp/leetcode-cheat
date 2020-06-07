import React, { useState } from "react";
import { Tabs, Tag, Button, Table, Empty, message } from "antd";

import { copy } from "./utils";
import db from "./db/db";

import "antd/dist/antd.css";
import "./App.css";

const { TabPane } = Tabs;
const { problems, tags: tagMapper } = db;
const dataSource = Object.values(problems);

function TagOrLink({ link, text }) {
  return link !== null ? (
    <a className="link" href={link} rel="noopener noreferrer" target="_blank">
      <Button type="link">{text}</Button>
    </a>
  ) : (
    <Tag color="orange">{text}</Tag>
  );
}

const columns = [
  {
    title: "题目",
    dataIndex: "name",
    key: "name",
    render: (name, row) => (
      <a
        className="link"
        href={`https://leetcode-cn.com/problems/${name}/`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button type="link">
          {row.id}.{name}
        </Button>
      </a>
    ),
  },
  {
    title: "标签",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          return <TagOrLink text={tagMapper[tag.id].text} link={tag.link} />;
        })}
      </>
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
      setShow(!!problems[problemId]);
    });

  const [problemId, setProblemId] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      {show ? (
        <Tabs defaultActiveKey="0">
          <TabPane tab="前置知识" key="0">
            {problems[problemId].pre.map(({ link, text }) => (
              <TagOrLink text={text} link={link} />
            ))}
          </TabPane>
          <TabPane tab="关键点" key="1">
            {problems[problemId].keyPoints.map(({ link, text }) => (
              <TagOrLink text={text} link={link} />
            ))}
          </TabPane>
          <TabPane tab="题解" key="2">
            <a
              className="link nav"
              href={problems[problemId].solution}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button type="link">前往题解</Button>
            </a>
          </TabPane>
          <TabPane tab="代码" key="3">
            <div className="code-block">
              {problems[problemId].code.map((c) => (
                <div className="row" style={{ marginTop: "10px" }}>
                  <span className="language language-js">{c.language}</span>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() =>
                      copy(c.text, () => {
                        message.success("复制成功～");
                      })
                    }
                  >
                    复制
                  </Button>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tab="公司" key="4">
            {problems[problemId].company.map((c) => c.name).join("，")}
          </TabPane>
          <TabPane
            tab="可视化调试（敬请期待）"
            key="5"
            disabled={true}
          ></TabPane>
        </Tabs>
      ) : (
        <div>
          <Empty description="正在撰写题解...">
            <div className="row" style={{ marginTop: "20px" }}>
              所有已收录的题目
            </div>
            <Table
              pagination={{ hideOnSinglePage: true }}
              dataSource={dataSource}
              columns={columns}
            />
          </Empty>
        </div>
      )}
    </div>
  );
}

export default App;

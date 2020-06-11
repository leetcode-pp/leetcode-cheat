import React, { useState, useEffect } from "react";
import { Tabs, Tag, Button, Table, Empty, message,Collapse } from "antd";
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import { copy } from "./utils";
import db from "./db/db";

import "antd/dist/antd.css";
import "./App.css";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const formatCodeToMarkDown = (code,lang) => `\`\`\`${lang}\n${code}\`\`\`\n`

const { problems } = db;
const dataSource = Object.values(problems);

function TagOrLink({ link, text, style, color }) {
  return link !== null ? (
    <a className="link" href={link} rel="noopener noreferrer" target="_blank">
      <Button type="link">{text}</Button>
    </a>
  ) : (
    <div style={style}>
      <Tag color={color}>{text}</Tag>
    </div>
  );
}

const columns = [
  {
    title: "题目",
    dataIndex: "name",
    width: "300",
    align: "center",
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
    align: "center",
    render: (tags) => (
      <div>
        {tags.map((tag) => {
          return (
            <TagOrLink
              style={{
                width: "100px",
                display: "inline-block",
                margin: "4px 0",
              }}
              key={tag.id}
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
      setShow(!!problems[problemId]);
    });

  const [problemId, setProblemId] = useState("");
  const [show, setShow] = useState(false);


  return (
    <div className="container">
      {show ? (
        <Tabs defaultActiveKey="0">
          <TabPane tab="前置知识" key="0">
            {problems[problemId].pre.map(({ id, link, text, color }) => (
              <TagOrLink key={id} text={text} link={link} color={color} />
            ))}
          </TabPane>
          <TabPane tab="关键点" key="1">
            {problems[problemId].keyPoints.map(({ id, link, text, color }) => (
              <TagOrLink key={text} text={text} link={link} color={color} />
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
              <Collapse>
              {problems[problemId].code.map((c) => (
                 <Panel>
                <div key={c.text} className="row" style={{ marginTop: "10px" }}>
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
                }>
                  <div dangerouslySetInnerHTML={{__html: marked(formatCodeToMarkDown(c.text,c.language), {renderer: new marked.Renderer(),
                      highlight: function() {
                        const validLanguage =c.language
                        return hljs.highlight(validLanguage, c.text).value;
                      },
                      pedantic: false,
                      gfm: true,
                      langPrefix: c.language,
                      breaks: false,
                      sanitize: false,
                      smartLists: true,
                      smartypants: false,
                      xhtml: false
                    })}}>
                      </div>
                     
                    
               
                </Panel>
              ))}
              </Collapse>
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

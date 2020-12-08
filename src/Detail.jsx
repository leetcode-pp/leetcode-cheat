import React, { Fragment } from "react";
import { Button, Tabs, Collapse } from "antd";

import "highlight.js/styles/github.css";

import {
  LEETCODE_CN_URL,
  ISSUES_URL,
  CONTRIBUTE_COMPANY_URL,
} from "./constant/index";
import db from "./db/db";

import Codes from "./codes";
import TagOrLink from "./TagOrLink";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const { problems, company } = db;

export default function Detail({ problemId }) {
  return (
    <Tabs defaultActiveKey="0">
      <TabPane tab="前置知识" key="pre">
        {problems[problemId].pre.map(({ link, text, color }) => (
          <TagOrLink key={text} text={text} link={link} color={color} />
        ))}
      </TabPane>
      <TabPane tab="关键点" key="key">
        {problems[problemId].keyPoints.length === 0 && (
          <Fragment>
            暂无关键点，
            <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">
              点击反馈
            </a>
          </Fragment>
        )}
        <ul>
          {problems[problemId].keyPoints.map(({ link, text }) => (
            <li key={text}>{link ? <a href={link}>text</a> : text}</li>
          ))}
        </ul>
      </TabPane>
      <TabPane tab="公司" key="company">
        {problems[problemId].companies.length === 0 && (
          <Fragment>
            暂无公司资料，
            <a
              href={CONTRIBUTE_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              点击反馈
            </a>
          </Fragment>
        )}
        <Collapse>
          {problems[problemId].companies.map(({ name }) => (
            <Panel header={name} key={name}>
              <ul>
                {company[name].map((id) => (
                  <li key={name}>
                    <Button
                      type="link"
                      href={`${LEETCODE_CN_URL}/problems/${id}`}
                      target="_blank"
                    >
                      {id}
                    </Button>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </Collapse>
      </TabPane>
      <TabPane tab="题解" key="solution">
        <Button
          type="link"
          href={problems[problemId].solution}
          target="_blank"
          rel="noopener noreferrer"
        >
          前往 github 题解（国外）
        </Button>

        <Button
          type="link"
          href={problems[problemId].giteeSolution}
          target="_blank"
        >
          前往 gitee 题解（国内）
        </Button>
      </TabPane>
      <TabPane tab="代码" key="code">
        <div className="code-block">
          <Collapse>
            <Codes codes={problems[problemId].code}></Codes>
          </Collapse>
        </div>
      </TabPane>

      <TabPane
        tab="可视化调试（敬请期待）"
        key="debug"
        disabled={true}
      ></TabPane>

      <TabPane tab="我要反馈" key="feedback">
        <a
          href={ISSUES_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "20px" }}
        >
          我想反馈问题
        </a>
        <a
          href={CONTRIBUTE_COMPANY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "20px" }}
        >
          我想贡献公司和岗位信息（免费获得题目咨询服务）
        </a>
        <a
          href="https://tva1.sinaimg.cn/large/007S8ZIlly1gfcuzagjalj30p00dwabs.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          关注更新
        </a>
      </TabPane>
    </Tabs>
  );
}

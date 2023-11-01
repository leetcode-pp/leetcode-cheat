import React, { useEffect, useState } from "react";
import { Button, Collapse, Tabs } from "antd";
import Codes from "../components/codes";
import { t, getLeetcodeUrlForLang } from "../locales";
import { CONTRIBUTE_PROGRAMMING_LANGUAGE_URL } from "../constant/index";

const { TabPane } = Tabs;
const { Panel } = Collapse;

function computedURL(problem) {
  if (problem.id.startsWith("http://") || problem.id.startsWith("https://"))
    return problem.id;

  return `${getLeetcodeUrlForLang()}/problems/${problem.id}`;
}

export default function CodeTemplate({ templates }) {
  const [tab, setTab] = useState("");
  const [tempaltesState, setTempaltesState] = useState([]);

  useEffect(() => {
    setTempaltesState(templates.map((c) => c?.call()));
  }, [templates]);

  useEffect(() => {
    tempaltesState[0] && setTab(tempaltesState[0].title);
  }, [tempaltesState]);

  return (
    <div>
      <Tabs activeKey={tab}>
        {tempaltesState.map((tempalte) => (
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
                {t("Locale.codeTemplate.perSum.tips")}
                <Button type="link" href={tempalte.link} target="_blank">
                  {t("Locale.app.article")}
                </Button>
                ~
              </div>
            )}
            {tempalte.list.map(({ text, problems, codes }) => (
              <Collapse key={text}>
                <Panel header={<span>{text}</span>} key={text}>
                  <div style={problems.length > 0 ? {} : { display: "none" }}>
                    {t("Locale.app.recommendedQuestions")}
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
                            {t("Locale.app.toWriteSilently")}
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
                    {t("Locale.app.contribution")}
                  </Button>
                </Panel>
              </Collapse>
            ))}
          </TabPane>
        ))}

        <TabPane
          tab={t("Locale.codeTemplate.moreTemplate")}
          key="more"
          disabled
        ></TabPane>
      </Tabs>
    </div>
  );
}

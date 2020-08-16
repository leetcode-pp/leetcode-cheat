import React, { useState } from "react";
import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

import {
  cell,
  container,
  current,
  currentPointer,
  layout2cols,
  text,
} from "./Array.module.css";

function Array({ inputs, pointers }) {
  return (
    <div>
      {inputs.map((input, i) => {
        const hit = pointers.find((pointer) => pointer.pos === i);
        return (
          <div key={i} className={hit ? `${current} ${cell}` : cell}>
            {hit && (
              <span className={currentPointer}>
                {hit.label}
                <ArrowDownOutlined style={{ fontSize: "40px" }} />
              </span>
            )}
            {input}
          </div>
        );
      })}
    </div>
  );
}

function SingleValue({ label, value }) {
  return (
    <div className={text}>
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
}

function Layout({ flex, children }) {
  return (
    <div className={layout2cols}>
      {children.map((child, i) => (
        <div key={i} style={{ flex: flex[i] }}>
          {child}
        </div>
      ))}
    </div>
  );
}
let i = 0;
function App() {
  const [pointers, setPointers] = useState([
    { label: "left", pos: 0 },
    { label: "right", pos: 3 },
  ]);

  return (
    <div className={container}>
      <Layout flex={[1, 1]}>
        <Array inputs={[1, 2, 3, 5]} pointers={pointers} />
        <SingleValue label="target" value="5" />
      </Layout>

      <Button
        onClick={() => {
          if (i === 0) {
            setPointers([
              { label: "left", pos: 0 },
              { label: "right", pos: 2 },
            ]);
          }
          if (i === 1) {
            setPointers([
              { label: "left", pos: 1 },
              { label: "right", pos: 2 },
            ]);
          }

          i++;
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default App;

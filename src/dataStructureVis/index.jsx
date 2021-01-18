import React, { useEffect, useState, createRef } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import { Button, Select, Input, List, Typography, message, Modal } from "antd";
import { uuidv4 } from "../utils";
import treeLevel2 from "../db/dataStructureVis/tree-level-2";
import treeLevel3 from "../db/dataStructureVis/tree-level-3";
import treeLevel4 from "../db/dataStructureVis/tree-level-4";
import trigeminal from "../db/dataStructureVis/trigeminal";
import graph1 from "../db/dataStructureVis/graph-1";
import recurTree1 from "../db/dataStructureVis/recur-tree-1.js";
import array1 from "../db/dataStructureVis/array-1.js";
import board1 from "../db/dataStructureVis/board-1.js";

// import treeLevel5 from "../db/dataStructureVis/tree-level-5";

import "@excalidraw/excalidraw/dist/excalidraw.min.css";
import "@excalidraw/excalidraw/dist/fonts.min.css";
import "./index.css";

const { Option } = Select;

const InitialData = {
  elements: [],
  appState: {},
};
function saveScene(title, elements) {
  return getStorage("customDrawings").then((res) => {
    const { result } = res;
    const currentElements = result.value || [];
    return setStorage(
      "customDrawings",
      currentElements.concat({
        id: uuidv4(),
        title,
        typeName: "自定义",
        data: elements,
      })
    )
      .then(() => {
        message.success({
          content: "保存成功~",
        });
        return getStorage("customDrawings").then((res) => {
          const { result } = res;
          return result.value || [];
        });
      })
      .catch((msg) => message.error(msg));
  });
}
// function renameCustomDrawing({ id, title, data }) {
//   deleteCustomDrawing(id).then(() =>
//     saveScene({
//       title,
//       elements: data,
//     })
//   );
// }
function deleteCustomDrawing(id) {
  return getStorage("customDrawings").then((res) => {
    const { result } = res;
    const currentElements = result.value || [];

    return setStorage(
      "customDrawings",
      currentElements.filter((el) => el.id !== id)
    )
      .then(() => {
        message.success({
          content: "删除成功~",
        });
        return getStorage("customDrawings").then((res) => {
          const { result } = res;
          return result.value || [];
        });
      })
      .catch((msg) => message.error(msg));
  });
}

function getStorage(k) {
  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line
      if (chrome.storage) {
        // eslint-disable-next-line
        chrome.storage.get([k], resolve);
      } else if (localStorage) {
        resolve({
          result: {
            value: JSON.parse(localStorage.getItem(k)),
          },
        });
      } else {
        reject("未知错误");
      }
    } catch (err) {
      reject(err);
    }
  });
}

function setStorage(k, v) {
  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line
      if (chrome.storage) {
        // eslint-disable-next-line
        chrome.storage.sync.set(
          {
            [k]: v,
          },
          resolve
        );
      } else if (localStorage) {
        localStorage.setItem(k, JSON.stringify(v));
        resolve();
      } else {
        reject("您可能禁用了存储功能~");
      }
    } catch (err) {
      console.log(err, k, v);
      reject("当前没有存储权限，或者存储已达到上限~");
    }
  });
}

const initialDataSource = {
  presets: [
    {
      title: "二层二叉树",
      data: treeLevel2,
      desc: "",
      cover: "",
      type: "tree",
      typeName: "树",
    },
    {
      title: "三层二叉树",
      data: treeLevel3,
      desc: "",
      cover: "",
      type: "tree",
      typeName: "树",
    },
    {
      title: "四层二叉树",
      data: treeLevel4,
      desc: "",
      cover: "",
      type: "tree",
      typeName: "树",
    },
    {
      title: "三叉树",
      data: trigeminal,
      desc: "",
      cover: "",
      type: "tree",
      typeName: "树",
    },
    {
      title: "递归树",
      data: recurTree1,
      desc: "",
      cover: "",
      type: "tree",
      typeName: "树",
    },
    {
      title: "简单数组",
      data: array1,
      desc: "",
      cover: "",
      type: "array",
      typeName: "数组",
    },
    {
      title: "简单二维矩阵",
      data: board1,
      desc: "",
      cover: "",
      type: "board",
      typeName: "二维矩阵（或邻接矩阵）",
    },
    {
      title: "简单图",
      data: graph1,
      desc: "",
      cover: "",
      type: "graph",
      typeName: "图",
    },
  ],
  custom: [],
};

const excalidrawRef = createRef();
export default function DataStrutureVis() {
  const onChange = (elements, state) => {
    setElements(elements);
  };

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //   const [type, setType] = useState("array");
  //   const [depth, setDepth] = useState("3");
  //   const [value, setValue] = useState("");
  const [type, setType] = useState("custom");
  const [elements, setElements] = useState([]);
  const [title, setTitle] = useState("无标题");
  const [dataSource, setDataSource] = useState(initialDataSource);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [offsetTop, setOffsetTop] = useState(400);

  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    document.onfullscreenchange = (e) => {
      const fullscreenElement = document.fullscreenElement;
      if (!fullscreenElement) {
        setFullScreenMode(false);
        setOffsetTop(400);
      } else {
        setFullScreenMode(true);
        setOffsetTop(0);
      }
    };

    getStorage("customDrawings").then((res) => {
      const { result } = res;
      dataSource.custom = result.value || [];
      setDataSource(dataSource);
    });

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const updateScene = (data) => {
    const sceneData = {
      elements: data,
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    };
    // console.log(excalidrawRef.current);
    excalidrawRef.current.updateScene(sceneData);
  };

  const { width, height } = dimensions;

  return (
    <div className="App">
      <div style={fullScreenMode ? { display: "none" } : {}}>
        <div>
          暂不支持编辑功能。如果需要编辑，可通过先“使用”再“保存”，最后“删除”原有的数据，从而间接实现。
        </div>
        {/* <Select value={type} style={{ width: 120 }} onChange={setType}>
        <Option value="array">数组</Option>
        <Option value="linked-list">链表</Option>
        <Option value="tree" disabled>
          树
        </Option>
      </Select> */}
        {/* <Input value={value} onChange={(e) => setValue(e.target.value)}></Input> */}
        {/* <Select value={depth} style={{ width: 120 }} onChange={setDepth}>
        <Option value="1">一层</Option>
        <Option value="2">两层</Option>
        <Option value="3">三层</Option>
        <Option value="4">四层</Option>
        <Option value="5">五层</Option>
      </Select> */}
        <Modal
          title="输入标题"
          visible={modalVisible}
          onOk={() => {
            saveScene(title, elements).then((d) => {
              setModalVisible(false);
              setType("custom");
              setDataSource({
                ...dataSource,
                custom: d,
              });
            });
          }}
          onCancel={() => setModalVisible(false)}
        >
          <Input
            placeholder="无标题"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal>
        <List
          style={{ height: "230px", overflow: "scroll" }}
          header={
            <Select value={type} style={{ width: 120 }} onChange={setType}>
              <Option value="presets">预设</Option>
              <Option value="custom">自定义</Option>
            </Select>
          }
          bordered
          dataSource={dataSource[type]}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>【{item.typeName}】</Typography.Text>
              {item.title}
              <Button type="link" onClick={() => updateScene(item.data)}>
                去使用
              </Button>
              {/* <Button
              style={type === "presets" ? { display: "none" } : {}}
              type="link"
              onClick={() => {
                setModalVisible(true);
              }}
            >
              编辑名称
            </Button> */}
              <Button
                style={type === "presets" ? { display: "none" } : {}}
                type="link"
                danger
                onClick={() => {
                  deleteCustomDrawing(item.id).then((d) =>
                    setDataSource({
                      ...dataSource,
                      custom: d,
                    })
                  );
                }}
              >
                删除
              </Button>
            </List.Item>
          )}
        />

        <Button
          type="primary"
          className="update-scene"
          onClick={() => setModalVisible(true)}
        >
          保存
        </Button>

        <Button
          className="update-scene"
          onClick={() => {
            // eslint-disable-next-line
            chrome.windows.create({
              state: "fullscreen",
              url: window.location.url,
            });
            // document.documentElement.requestFullscreen();
          }}
        >
          全屏模式(退出请按 ESC)
        </Button>
        {/* <Button type="primary" className="update-scene" onClick={updateScene}>
        快速生成
      </Button> */}
        {/* <button
        className="reset-scene"
        onClick={() => {
          excalidrawRef.current.resetScene();
        }}
      >
        清空
      </button> */}
      </div>
      <div className="excalidraw-wrapper">
        <Excalidraw
          ref={excalidrawRef}
          offsetTop={offsetTop}
          width={width}
          height={height}
          initialData={InitialData}
          onChange={onChange}
          user={{ name: "力扣加加" }}
          //   onPointerUpdate={(payload) => console.log(payload)}
        />
      </div>
    </div>
  );
}

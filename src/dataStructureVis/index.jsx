import React, { useEffect, useState, createRef } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import { DownOutlined } from "@ant-design/icons";
import {
  Button,
  Select,
  Input,
  List,
  Typography,
  message,
  Modal,
  Popconfirm,
  Dropdown,
  Collapse,
  Menu,
} from "antd";
import { uuidv4, isInExtension } from "../utils";
import treeLevel2 from "../db/dataStructureVis/tree-level-2";
import treeLevel3 from "../db/dataStructureVis/tree-level-3";
import treeLevel4 from "../db/dataStructureVis/tree-level-4";
import trigeminal from "../db/dataStructureVis/trigeminal";
import graph1 from "../db/dataStructureVis/graph-1";
import recurTree1 from "../db/dataStructureVis/recur-tree-1.js";
import array1 from "../db/dataStructureVis/array-1.js";
import board1 from "../db/dataStructureVis/board-1.js";

// import treeLevel5 from "../db/dataStructureVis/tree-level-5";

// import "@excalidraw/excalidraw/dist/excalidraw.min.css";
// import "@excalidraw/excalidraw/dist/fonts.min.css";
import "./index.css";

const { Option } = Select;
const { Panel } = Collapse;

const InitialData = {
  elements: [],
  appState: {},
};

function saveScene({ title, elements, customTypeName }) {
  return getStorage("customDrawings").then((res) => {
    const { result } = res;
    const currentElements = result.value || [];
    return setStorage(
      "customDrawings",
      currentElements.concat({
        id: uuidv4(),
        title,
        typeName: customTypeName,
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
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeKey, setActiveKey] = useState("template");
  const [elements, setElements] = useState([]);
  const [title, setTitle] = useState("无标题");
  const [dataSource, setDataSource] = useState(initialDataSource);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [offsetTop, setOffsetTop] = useState(500);
  const [customTypeName, setCustomTypeName] = useState("自定义");

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
        if (activeKey === "template") {
          setOffsetTop(600);
        } else {
          setOffsetTop(100);
        }
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
  }, [dataSource, activeKey]);

  const updateScene = ({
    data,
    incremental = false,
    elements = [],
    pointer,
  }) => {
    const { x = 0, y = 0 } = pointer;
    console.log(pointer);
    if (x !== 0 || y !== 0) {
      // 将 data 中的坐标整体偏移(x,y)
      data = data.map((el) => ({ ...el, x: el.x + x, y: el.y + y }));
    }
    const sceneData = {
      elements: incremental ? elements.concat(data) : data,
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    };
    // console.log(excalidrawRef.current);
    excalidrawRef.current.updateScene(sceneData);
    return sceneData.elements;
  };

  const { width, height } = dimensions;

  return (
    <div>
      {!isInExtension() ? (
        <>
          <Collapse
            activeKey={activeKey}
            onChange={(v) => {
              if (v[0] === "template") {
                setOffsetTop(600);
              } else {
                setOffsetTop(100);
              }
              setActiveKey(v[0]);
            }}
          >
            <Panel header="模板" key="template">
              <div style={fullScreenMode ? { display: "none" } : {}}>
                <ol>
                  <li>
                    暂不支持编辑功能。如果需要编辑，可通过先“使用”再“保存”，最后“删除”原有的数据，从而间接实现。
                  </li>
                  <li>
                    模板可以增量使用。点击”去使用“的下拉三角，并选择增量使用即可。
                  </li>
                  <li>
                    使用的模板会根据你鼠标的位置生成。比如你的鼠标在点(100,
                    100)，那么模板会整体偏移 (100, 100)个单位
                    。如果此时模板并不是正好以(100,
                    100)为左上顶点，说明模板本身制作的时候就不是以(0,0)为左上顶点制作的。大家制作自定义模板的话需要注意这一点。
                  </li>
                </ol>
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
                  title="请完善信息"
                  visible={modalVisible}
                  onOk={() => {
                    saveScene({ title, elements, customTypeName }).then((d) => {
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
                  标题：
                  <Input
                    placeholder="无标题"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div style={{ margin: "10px 0 0 0 " }}>
                    类别：
                    <Input
                      placeholder="自定义"
                      value={customTypeName}
                      onChange={(e) => setCustomTypeName(e.target.value)}
                    />
                  </div>
                </Modal>

                <List
                  style={{ height: "230px", overflow: "scroll" }}
                  header={
                    <Select
                      value={type}
                      style={{ width: 120 }}
                      onChange={setType}
                    >
                      <Option value="presets">预设</Option>
                      <Option value="custom">自定义</Option>
                    </Select>
                  }
                  bordered
                  dataSource={dataSource[type]}
                  renderItem={(item) => (
                    <List.Item>
                      {item.typeName && (
                        <Typography.Text mark>
                          【{item.typeName}】
                        </Typography.Text>
                      )}
                      {item.title}
                      <Dropdown
                        type="link"
                        onClick={() =>
                          setElements(
                            updateScene({
                              pointer,
                              data: item.data,
                              incremental: false,
                            })
                          )
                        }
                        overlay={
                          <Menu
                            onClick={() =>
                              setElements(
                                updateScene({
                                  pointer,
                                  data: item.data,
                                  incremental: true,
                                  elements,
                                })
                              )
                            }
                          >
                            <Menu.Item key="1">增量使用</Menu.Item>
                          </Menu>
                        }
                      >
                        <Button>
                          去使用 <DownOutlined />
                        </Button>
                      </Dropdown>
                      {/* <Button
              style={type === "presets" ? { display: "none" } : {}}
              type="link"
              onClick={() => {
                setModalVisible(true);
              }}
            >
              编辑名称
            </Button> */}
                      <Popconfirm
                        title="确认要删除么？"
                        onConfirm={() =>
                          deleteCustomDrawing(item.id).then((d) =>
                            setDataSource({
                              ...dataSource,
                              custom: d,
                            })
                          )
                        }
                        okText="是"
                        cancelText="否"
                      >
                        <Button
                          style={type === "presets" ? { display: "none" } : {}}
                          type="link"
                          danger
                        >
                          删除
                        </Button>
                      </Popconfirm>
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
                  style={{ margin: "0 0 0 10px" }}
                  className="update-scene"
                  onClick={() => {
                    document.documentElement.requestFullscreen();
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
            </Panel>
          </Collapse>

          <div className="excalidraw-wrapper">
            <Excalidraw
              ref={excalidrawRef}
              offsetTop={offsetTop}
              width={width}
              height={height}
              initialData={InitialData}
              onChange={onChange}
              onPointerUpdate={({ pointer }) => {
                setPointer(pointer);
              }}
              user={{ name: "力扣加加" }}
              //   onPointerUpdate={(payload) => console.log(payload)}
            />
          </div>
        </>
      ) : (
        <Button
          type="link"
          target="_blank"
          href="https://leetcode-pp.github.io/leetcode-cheat/?tab=data-structure-vis"
        >
          去网站使用
        </Button>
      )}
    </div>
  );
}

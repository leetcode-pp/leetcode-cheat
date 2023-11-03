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
import { uuidv4, getStorage, setStorage } from "../utils";
import { initialDataSource, initialDataSourceEn } from "./data";
import { t, lang } from "../locales";

// import treeLevel5 from "../db/dataStructureVis/tree-level-5";

// import "@excalidraw/excalidraw/dist/excalidraw.min.css";
// import "@excalidraw/excalidraw/dist/fonts.min.css";
import "./index.css";

const { Option } = Select;

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
          content: t("app.saveSuccess"),
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
          content: t("app.deleteSuccess"),
        });
        return getStorage("customDrawings").then((res) => {
          const { result } = res;
          return result.value || [];
        });
      })
      .catch((msg) => message.error(msg));
  });
}

const excalidrawRef = createRef();
const excalidrawWrapperRef = createRef();
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
  const [dataSource, setDataSource] = useState(
    lang === "en" ? initialDataSourceEn : initialDataSource
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);
  const [customTypeName, setCustomTypeName] = useState("自定义");

  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  console.log("lang", lang);
  useEffect(() => {
    console.log("lang", lang);
    window.addEventListener("resize", onResize);
    document.onfullscreenchange = (e) => {
      const fullscreenElement = document.fullscreenElement;
      if (!fullscreenElement) {
        setFullScreenMode(false);
      } else {
        setFullScreenMode(true);
      }
      // setOffsetTop(excalidrawWrapperRef.current.offsetTop);
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
    // console.log(pointer, sceneData);
    excalidrawRef.current.updateScene(sceneData);
    return sceneData.elements;
  };

  const { width, height } = dimensions;

  return (
    <div>
      <Collapse
        activeKey={activeKey}
        onChange={(v) => {
          setActiveKey(v[0]);
        }}
      >
        <div
          className="d-list"
          style={fullScreenMode ? { display: "none" } : {}}
        >
          <ol>
            <li>
              {t("Locale.dataStructureVisualization.explain1")}
            </li>
            <li>
            {t("Locale.dataStructureVisualization.explain2")}

            </li>
            <li>
            {t("Locale.dataStructureVisualization.explain3")}

            </li>
            <li>
            {t("Locale.dataStructureVisualization.explain4")}

              <a href="https://excalidraw.com/">Website</a>
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
              <Select value={type} style={{ width: 120 }} onChange={setType}>
                <Option value="presets">{t("app.presets")}</Option>
                <Option value="custom">{t("app.custom")}</Option>
              </Select>
            }
            bordered
            dataSource={dataSource[type]}
            renderItem={(item) => (
              <List.Item>
                {item.typeName && (
                  <Typography.Text mark>【{item.typeName}】 </Typography.Text>
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
                      <Menu.Item key="1">
                        {t(
                          "Locale.dataStructureVisualization.incrementalUsage"
                        )}
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button size="small" style={{ marginLeft: "8px" }}>
                    {t("app.toUse")} <DownOutlined />
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
                  title={t("app.delTitle")}
                  onConfirm={() =>
                    deleteCustomDrawing(item.id).then((d) =>
                      setDataSource({
                        ...dataSource,
                        custom: d,
                      })
                    )
                  }
                  okText={t("app.yes")}
                  cancelText={t("app.no")}
                >
                  <Button
                    style={type === "presets" ? { display: "none" } : {}}
                    type="link"
                    danger
                  >
                    {t("app.delete")}
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
            {t("app.save")}
          </Button>

          <Button
            style={{ margin: "0 0 0 10px" }}
            className="update-scene"
            onClick={() => {
              document.documentElement.requestFullscreen();
            }}
          >
            {t("app.fullScreen")}
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
      </Collapse>

      <div
        className="excalidraw-wrapper"
        ref={excalidrawWrapperRef}
        style={{ width, height }}
      >
        <Excalidraw
          ref={excalidrawRef}
          // offsetTop={offsetTop}
          // width={width}
          // height={height}
          initialData={InitialData}
          onChange={onChange}
          onPointerUpdate={({ pointer }) => {
            setPointer(pointer);
          }}
          name={t("app.name")}
          // user={{ name: "力扣加加" }}
          //   onPointerUpdate={(payload) => console.log(payload)}
        />
      </div>
    </div>
  );
}

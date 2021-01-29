import React, { PureComponent } from "react";
import { Button, Modal, Input } from "antd";
import PropTypes from "prop-types";

import { setStorage, getStorage } from "../utils";

export default class AccessToken extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {};
  constructor() {
    super();
    this.state = {
      token: "",
    };

    getStorage("leetcode-cheatsheet-token")
      .then((res) => res.result.value)
      .then((res) => {
        if (res.raw === null) return;
        this.setState({
          token: res.raw,
        });
      });
  }

  render() {
    return (
      <Modal
        title="完善 token 信息，提升稳定性"
        visible={this.props.visible}
        onOk={() => {
          // save
          setStorage("leetcode-cheatsheet-token", {
            raw: this.state.token,
          });
          this.props.onOk();
        }}
        onCancel={this.props.onCancel}
      >
        不填写 token
        有时候可能无法成功带过去信息（比如题目描述，代码等）。强烈建议大家填写！请放心，你的
        token 只会存在于你的本地，不会被上传到服务端哦。
        <Button
          type="link"
          target="_blank"
          href="https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token"
        >
          不知道如何创建？点击这里！（只需要勾选 repo 中的 public_repo 即可）
        </Button>
        Personal Access Token：
        <Input
          placeholder=""
          value={this.state.token}
          onChange={(e) => this.setState({ token: e.target.value })}
        />
        <Button
          style={{ marginTop: 10 }}
          size="small"
          type="link"
          onClick={() => {
            setStorage("leetcode-cheatsheet-token", {
              raw: void 0,
            });
            this.setState({
              token: "",
            });
            this.props.onOk();
          }}
        >
          清除 token（使用默认 token）
        </Button>
      </Modal>
    );
  }
}

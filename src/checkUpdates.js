import React from "react";
import { message } from "antd";
const chrome = window.chrome;
if (chrome) {
  chrome.runtime.onUpdateAvailable &&
    chrome.runtime.onUpdateAvailable.addListener(function (details) {
      console.log("updating to version " + details.version);

      chrome.runtime.reload();
    });
} else {
  // 其他浏览器;
}

export default function checkUpdate() {
  return chrome.runtime.requestUpdateCheck(function (status) {
    if (status === "update_available") {
      message.success({
        content: (
          <>
            检测到有新版本，已为您自动更新。如果更新失败，您可以去
            <a href="chrome://extensions/">扩展中心</a> 手动更新哦~
          </>
        ),
      });
    } else if (status === "no_update") {
      message.success({
        content: "已经是最新版本了~",
      });
    } else if (status === "throttled") {
      message.success({
        content: "操作太频繁，请稍后再试~",
      });
    }
  });
}

import { message } from "antd";
// eslint-disable-next-line
chrome.runtime.onUpdateAvailable &&
  // eslint-disable-next-line
  chrome.runtime.onUpdateAvailable.addListener(function (details) {
    console.log("updating to version " + details.version);
    // eslint-disable-next-line
    chrome.runtime.reload();
  });

export default function checkUpdate() {
  // eslint-disable-next-line
  if (!chrome.runtime.requestUpdateCheck) return;
  // eslint-disable-next-line
  return chrome.runtime.requestUpdateCheck(function (status) {
    if (status === "update_available") {
      message.success({
        content: "检测到有新版本，您可以去 <a href=\"chrome://extensions/\">扩展中心</a> 手动更新",
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

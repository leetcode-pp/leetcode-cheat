
function hideFailCases() {
    const submissionDOM = document.querySelector("div[data-key=submissions-content]")
    const submmisionTabVisible = submissionDOM?.children.length > 0;
    if (submmisionTabVisible) {
        const result = submissionDOM.querySelector("div[data-cypress=SubmissionSuccess]")
        debugger
        if (!result) {
            return false
        }
        const hasError = result.getAttribute("type") === "error"
        if (!hasError) return true
        const input = submissionDOM.children[0].children[0].children[0].children[0].children[2]
        const output = submissionDOM.children[0].children[0].children[0].children[0].children[3]
        const expect = submissionDOM.children[0].children[0].children[0].children[0].children[4]
        input.style.display = "none"
        output.style.display = "none"
        expect.style.display = "none"
        const showFailCases = document.createElement("div");
        const showFailCasesTip = document.createElement("span")
        showFailCasesTip.innerText = "请先尝试自己解决，如果实在无法解决再尝试显示失败的测试用例！";
        showFailCasesTip.style["margin-right"] = "20px";
        showFailCasesTip.style["line-height"] = "32px";

        const showFailCasesButton = document.createElement("a")
        showFailCasesButton.innerText = "点击显示失败的测试用例"
        showFailCasesButton.style["margin-right"] = "20px";
        showFailCasesButton.style["line-height"] = "32px";

        showFailCasesButton.onclick = () => {
            input.style.display = "block"
            output.style.display = "block"
            expect.style.display = "block"

        };

        showFailCases.appendChild(showFailCasesTip);
        showFailCases.appendChild(showFailCasesButton);

        submissionDOM.children[0].children[0].children[0].children[0].insertBefore(showFailCases, input)
        return true
    }
    return false
}



export default function run() {
    return hideFailCases();
}

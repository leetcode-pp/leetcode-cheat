import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    let { language, value = "" } = this.props;
    if (language === "py") language = "python";
    if (language === "js") language = "javascript";

    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;

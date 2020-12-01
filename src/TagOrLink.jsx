import React from "react";
import { Button, Tag } from "antd";

export default function TagOrLink({ link, text, style, color }) {
  return link !== null ? (
    <Button type="link" href={link} target="_blank">
      {text}
    </Button>
  ) : (
    <div style={{ display: "inline-block", ...style }}>
      <Tag color={color}>{text}</Tag>
    </div>
  );
}

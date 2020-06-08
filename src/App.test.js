import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("#cold hello world", () => {
  expect(true).toBe(true);
});

test("#hot hello world", () => {
  expect(false).toBe(true);
});

test("#cold hello world", () => {
  expect(true).toBe(true);
});

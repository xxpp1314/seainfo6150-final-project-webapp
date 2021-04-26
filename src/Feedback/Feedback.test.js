import React from "react";
import { render } from "@testing-library/react";
import Feedback from "./Feedback.jsx";

it("renders the Feedback Page correctly", () => {
  const { container } = render(
    <Feedback />
  );
  expect(container).toMatchSnapshot();
});

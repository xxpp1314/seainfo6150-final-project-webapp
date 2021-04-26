import React from "react";
import { render } from "@testing-library/react";
import Thankyou from "./Thankyou.jsx";

it("renders the Thank You Page correctly", () => {
  const { container } = render(<Thankyou />);
  expect(container).toMatchSnapshot();
});

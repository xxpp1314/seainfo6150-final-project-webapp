import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the AboutUs Page correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <AboutUs/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});
import React from "react";
import { render } from "@testing-library/react";
import PetCategories from "./PetCategories.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the PetCategories correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <PetCategories/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});
import React from "react";
import { render } from "@testing-library/react";
import RecommendPets from "./RecommendPets.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the FeaturedGifts Page correctly", () => {
  const { container } = render(
    <BrowserRouter>  
        <RecommendPets/>
    </BrowserRouter> 
  );
  expect(container).toMatchSnapshot();
});

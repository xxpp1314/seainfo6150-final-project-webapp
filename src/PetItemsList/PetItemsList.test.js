import React from "react";
import { render } from "@testing-library/react";
import PetItemsList from "./PetItemsList.jsx";
import { BrowserRouter } from 'react-router-dom';

const petItem={
    "Russell":
    {
       "price":"$300",
       "title":"Russell",
       "category":"dogs",
       "categoryid":"Russell",
       "img":
       {
          "url":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829956/1/?bust=1619138292&width=1080",
          "height":400,
          "width":500
       }
    }
}

it("renders the PetItemsList correctly", () => {
  const { container } = render(
    <BrowserRouter>
        <PetItemsList petItemList={Object.values(petItem)} pagetitle="Dogs"/>
    </BrowserRouter>
    );
  expect(container).toMatchSnapshot();
});

import React from "react";
import { render } from "@testing-library/react";
import PetItem from "./PetItem.jsx";

const petItem = {
    title: "Russell",
    img:
      {
         "url":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829956/1/?bust=1619138292&width=1080",
         "height":400,
         "width":500
      },
    price: "$300"
}

it("renders the PetItem correctly", () => {
  const { container } = render(
    <PetItem
      petItem={petItem}
    />
    );
  expect(container).toMatchSnapshot();
});

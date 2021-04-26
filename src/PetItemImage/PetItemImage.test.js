import React from "react";
import { render } from "@testing-library/react";
import PetItemImage from "./PetItemImage.jsx";

it("renders the PetItemImage correctly", () => {
  const { container } = render(
    <PetItemImage
      url="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/51169344/1/?bust=1619142914&width=1080"
    />
  );
  expect(container).toMatchSnapshot();
});
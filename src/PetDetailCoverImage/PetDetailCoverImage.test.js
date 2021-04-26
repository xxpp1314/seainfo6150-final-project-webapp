import React from "react";
import { render } from "@testing-library/react";
import PetDetailCoverImage from "./PetDetailCoverImage.jsx";

const imageurl="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829956/1/?bust=1619138292&width=1080";

it("renders the PetDetailCoverImage correctly", () => {
  const { container } = render(
        <PetDetailCoverImage
            url={imageurl}
        />
    );
  expect(container).toMatchSnapshot();
});
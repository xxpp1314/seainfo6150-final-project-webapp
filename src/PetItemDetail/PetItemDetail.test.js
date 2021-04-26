import React from "react";
import { render } from "@testing-library/react";
import PetItemDetail from "./PetItemDetail.jsx";

it("renders the PetItemDetail correctly", () => {
  const { container } = render(
        <PetItemDetail
            category="dogs"
            categoryid="Russell"
        />
    );
    expect(container).toMatchSnapshot();
  });
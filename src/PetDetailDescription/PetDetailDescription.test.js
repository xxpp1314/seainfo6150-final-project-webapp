import React from "react";
import { render } from "@testing-library/react";
import PetDetailDescription from "./PetDetailDescription.jsx";

const petdetails={
    "price":"$300",
    "title":"Russell",
    "category":"dogs",
    "categoryid":"Russell",
    "img":
    {
       "url":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829956/1/?bust=1619138292&width=1080",
       "height":400,
       "width":500
    },
    "age":"Adult",
    "gender":"Male",
    "size":"Medium",
    "breed":"Terrier Mix",
    "description":["He is a four year old Jack Russell terrier mix. Russell is a great companion pet for adults and families with older children, however he does not do well with other animals so he needs to be an only pet. He is very energetic and loves walks, chewing on his bones, and napping with his owner. He is house trained."]
}

it("renders the PetDetailDescription correctly", () => {
    const { container } = render(
        <PetDetailDescription
            detail={petdetails}
        />
    );
    expect(container).toMatchSnapshot();
});
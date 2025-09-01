import React from "react";
import PropertyPage from "../page";

describe("<page />", () => {
  it("renders", () => {
    cy.mount(<PropertyPage />);
  });
});

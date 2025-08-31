describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "auth" and click it
    cy.get('a[href*="auth"]').click();

    // The new url should include "/auth"
    cy.url().should("include", "/auth");

    // The new page should contain an h3 with "LO IN"
    cy.get("h3").contains("LOG IN");
  });
});

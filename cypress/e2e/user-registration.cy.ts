describe("User Registration Flow", () => {
  it("should complete full registration flow from landing page to dashboard", () => {
    // Given: User visits the app landing page
    cy.visit("/");
    cy.url().should("include", "/");

    // When: User clicks the "Get Started for Free" button
    cy.get('[data-testid="get-started-btn"]')
      .should("be.visible")
      .and("contain.text", "Get Started for Free")
      .click();

    // Then: User is navigated to registration page
    cy.url().should("include", "/register");
    cy.get('[data-testid="registration-form"]').should("be.visible");

    // When: User fills in the registration form
    const agentInfo = {
      firstName: "John",
      lastName: "Doe",
      email: `test.user+${Date.now()}@example.com`,
      password: "TestPassword123!",
      company: "Test Company",
    };

    cy.get('[data-testid="first-name-input"]')
      .should("be.visible")
      .type(agentInfo.firstName);

    cy.get('[data-testid="last-name-input"]')
      .should("be.visible")
      .type(agentInfo.lastName);

    cy.get('[data-testid="email-input"]')
      .should("be.visible")
      .type(agentInfo.email);

    cy.get('[data-testid="password-input"]')
      .should("be.visible")
      .type(agentInfo.password);

    cy.get('[data-testid="company-input"]')
      .should("be.visible")
      .type(agentInfo.company);

    // And: User submits the form
    cy.get('[data-testid="submit-registration-btn"]')
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    // Then: Registration is successful and user is directed to dashboard
    cy.url().should("include", "/dashboard");

    // Wait for dashboard to load completely
    cy.get('[data-testid="dashboard-overview"]').should("be.visible");

    // And: User should see the lead scoring card
    cy.get('[data-testid="lead-scoring-card"]')
      .should("be.visible")
      .within(() => {
        cy.get('[data-testid="card-title"]').should(
          "contain.text",
          "Lead Scoring"
        );
        // Verify card content is present
        cy.get('[data-testid="card-content"]').should("exist");
      });

    // And: User should see today's tasks card
    cy.get('[data-testid="todays-tasks-card"]')
      .should("be.visible")
      .within(() => {
        cy.get('[data-testid="card-title"]').should(
          "contain.text",
          "Today's Tasks"
        );
        // Verify card content is present
        cy.get('[data-testid="card-content"]').should("exist");
      });

    // Additional verification: Check user is authenticated
    cy.getCookie("auth-token").should("exist");
    // Or check localStorage if using JWT
    cy.window().its("localStorage.auth-token").should("exist");
  });

  // Error handling test cases
  context("Registration Error Scenarios", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[data-testid="get-started-btn"]').click();
      cy.url().should("include", "/register");
    });

    it("should show validation errors for invalid form submission", () => {
      // Submit empty form
      cy.get('[data-testid="submit-registration-btn"]').click();

      // Check for validation errors
      cy.get('[data-testid="email-error"]')
        .should("be.visible")
        .and("contain.text", "Email is required");

      cy.get('[data-testid="password-error"]')
        .should("be.visible")
        .and("contain.text", "Password is required");
    });

    it("should handle duplicate email registration", () => {
      const existingUser = {
        firstName: "Jane",
        lastName: "Smith",
        email: "existing.user@example.com",
        password: "TestPassword123!",
        company: "Existing Company",
      };

      // Fill form with existing email
      cy.get('[data-testid="first-name-input"]').type(existingUser.firstName);
      cy.get('[data-testid="last-name-input"]').type(existingUser.lastName);
      cy.get('[data-testid="email-input"]').type(existingUser.email);
      cy.get('[data-testid="password-input"]').type(existingUser.password);
      cy.get('[data-testid="company-input"]').type(existingUser.company);

      cy.get('[data-testid="submit-registration-btn"]').click();

      // Should show error message
      cy.get('[data-testid="registration-error"]')
        .should("be.visible")
        .and("contain.text", "Email already exists");
    });
  });
});

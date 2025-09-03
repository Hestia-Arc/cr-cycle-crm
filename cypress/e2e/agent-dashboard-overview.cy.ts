describe("Agent Dashboard Overview", () => {
  // Test data for registered agent
  const registeredAgent = {
    firstName: "Sarah",
    lastName: "Wilson",
    email: "agent.sarah@testcompany.com",
    password: "AgentPassword123!",
    company: "Sales Pro Inc",
    role: "agent",
  };

  beforeEach(() => {
    // Reset application state
    cy.task("db:seed");
  });

  context("As a registered agent", () => {
    beforeEach(() => {
      // Given: Agent is already registered and logged in
      cy.registerAndLoginAgent(registeredAgent);
    });

    it("should see lead scoring and today's tasks on dashboard overview page", () => {
      // Given: Agent is on the dashboard overview page
      cy.visit("/dashboard");
      cy.url().should("include", "/dashboard");

      // Verify agent is authenticated and on overview page
      cy.get('[data-testid="dashboard-overview"]').should("be.visible");

      cy.get('[data-testid="user-profile"]').should(
        "contain.text",
        `${registeredAgent.firstName} ${registeredAgent.lastName}`
      );

      // When: Agent views the overview page
      // Then: Agent should see the lead scoring card
      cy.get('[data-testid="lead-scoring-card"]')
        .should("be.visible")
        .within(() => {
          // Verify card structure and content
          cy.get('[data-testid="card-header"]').should(
            "contain.text",
            "Lead Scoring"
          );

          cy.get('[data-testid="card-content"]').should("be.visible");

          // Verify lead scoring metrics are displayed
          cy.get('[data-testid="total-leads"]').should("be.visible");
          cy.get('[data-testid="high-priority-leads"]').should("be.visible");
          cy.get('[data-testid="conversion-rate"]').should("be.visible");
        });

      // And: Agent should see today's tasks card
      cy.get('[data-testid="todays-tasks-card"]')
        .should("be.visible")
        .within(() => {
          // Verify card structure and content
          cy.get('[data-testid="card-header"]').should(
            "contain.text",
            "Today's Tasks"
          );

          cy.get('[data-testid="card-content"]').should("be.visible");

          // Verify task list or empty state
          cy.get('[data-testid="tasks-list"]')
            .should("exist")
            .then(($tasksList) => {
              if ($tasksList.find('[data-testid="task-item"]').length > 0) {
                // Verify task items if they exist
                cy.get('[data-testid="task-item"]').should("be.visible");
              } else {
                // Verify empty state message
                cy.get('[data-testid="no-tasks-message"]')
                  .should("be.visible")
                  .and("contain.text", "No tasks for today");
              }
            });
        });

      // Additional verification: Both cards should be present on the same page
      cy.get('[data-testid="dashboard-overview"]').within(() => {
        cy.get('[data-testid="lead-scoring-card"]').should("exist");
        cy.get('[data-testid="todays-tasks-card"]').should("exist");
      });
    });

    it("should display accurate lead scoring data for the agent", () => {
      // Given: Agent has some leads in the system
      cy.createTestLeadsForAgent(registeredAgent.email);

      cy.visit("/dashboard");

      // When: Agent views lead scoring card
      cy.get('[data-testid="lead-scoring-card"]').within(() => {
        // Then: Should show updated lead counts
        cy.get('[data-testid="total-leads"]')
          .should("contain.text", "Total Leads")
          .and("not.contain.text", "0");

        cy.get('[data-testid="high-priority-leads"]')
          .should("contain.text", "High Priority")
          .should("be.visible");
      });
    });

    it("should display current tasks for the agent", () => {
      // Given: Agent has tasks assigned for today
      cy.createTodaysTasksForAgent(registeredAgent.email);

      cy.visit("/dashboard");

      // When: Agent views today's tasks card
      cy.get('[data-testid="todays-tasks-card"]').within(() => {
        // Then: Should show today's tasks
        cy.get('[data-testid="task-item"]').should("have.length.at.least", 1);

        cy.get('[data-testid="task-item"]')
          .first()
          .within(() => {
            cy.get('[data-testid="task-title"]').should("be.visible");
            cy.get('[data-testid="task-priority"]').should("be.visible");
            cy.get('[data-testid="task-due-time"]').should("be.visible");
          });
      });
    });
  });

  context(
    "Business Rule: Agent must be registered before accessing dashboard",
    () => {
      it("should redirect unregistered users to registration page", () => {
        // Given: User is not registered/authenticated
        cy.clearCookies();
        cy.clearLocalStorage();

        // When: User tries to access dashboard directly
        cy.visit("/dashboard");

        // Then: Should be redirected to registration/login page
        cy.url().should("not.include", "/dashboard");
        cy.url().should("match", /(login|register|auth)/);

        // And: Should see appropriate message
        cy.get('[data-testid="auth-required-message"]')
          .should("be.visible")
          .and("contain.text", "Please register or login to access dashboard");
      });

      it("should redirect users with invalid/expired tokens", () => {
        // Given: User has invalid authentication token
        cy.window().then((win) => {
          win.localStorage.setItem("auth-token", "invalid-token");
        });

        // When: User tries to access dashboard
        cy.visit("/dashboard");

        // Then: Should be redirected due to invalid token
        cy.url().should("not.include", "/dashboard");
        cy.url().should("match", /(login|register|auth)/);
      });

      it("should allow access only after successful registration and login", () => {
        // Given: User completes registration flow
        cy.visit("/");
        cy.get('[data-testid="get-started-btn"]').click();

        // When: User registers successfully
        cy.fillRegistrationForm(registeredAgent);
        cy.get('[data-testid="submit-registration-btn"]').click();

        // Then: Should have access to dashboard
        cy.url().should("include", "/dashboard");

        // And: Should see both required cards
        cy.get('[data-testid="lead-scoring-card"]').should("be.visible");
        cy.get('[data-testid="todays-tasks-card"]').should("be.visible");
      });
    }
  );

  context("Dashboard Loading States", () => {
    beforeEach(() => {
      cy.registerAndLoginAgent(registeredAgent);
    });

    it("should show loading states while fetching dashboard data", () => {
      // Given: Network requests are intercepted to simulate slow loading
      cy.intercept("GET", "/api/leads/scoring", {
        delay: 1000,
        fixture: "leads-scoring.json",
      }).as("getLeadScoring");
      cy.intercept("GET", "/api/tasks/today", {
        delay: 1000,
        fixture: "todays-tasks.json",
      }).as("getTodaysTasks");

      // When: Agent visits dashboard
      cy.visit("/dashboard");

      // Then: Should show loading states
      cy.get('[data-testid="lead-scoring-card"]').within(() => {
        cy.get('[data-testid="loading-spinner"]').should("be.visible");
      });

      cy.get('[data-testid="todays-tasks-card"]').within(() => {
        cy.get('[data-testid="loading-spinner"]').should("be.visible");
      });

      // And: Loading states should be replaced with actual content
      cy.wait("@getLeadScoring");
      cy.wait("@getTodaysTasks");

      cy.get('[data-testid="loading-spinner"]').should("not.exist");
      cy.get('[data-testid="card-content"]').should("be.visible");
    });
  });
});

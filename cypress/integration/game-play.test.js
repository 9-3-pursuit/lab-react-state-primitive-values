describe("Game play", () => {
  it("starts the game with the current score at 0", () => {
    cy.react("App").should("contain.text", "Current Score: 0");
  });

  it("increases the current score by 1 when the incrementor button is clicked", () => {
    cy.get("button").contains("+1").click();
    cy.react("App").should("contain.text", "Current Score: 1");
  });

  it("causes an alert message to be raised if the next incrementor cannot be bought", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get("button")
      .contains("Pay 10 points")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith("You can't afford that!");
      });
  });

  it("should increase the incrementor when it can be paid for", () => {
    Cypress._.times(9, () => {
      cy.get("button").contains("+1").click();
    });

    cy.react("App").should("contain.text", "Current Score: 10");
    cy.get("button").contains("Pay 10 points").click();

    cy.react("App").should("contain.text", "Current Score: 0");
    cy.get("button").contains("+2").should("exist");
  });

  it("should allow for the incrementor to increase multiple times", () => {
    Cypress._.times(10, () => {
      cy.get("button").contains("+2").click();
    });

    cy.react("App").should("contain.text", "Current Score: 20");
    cy.get("button").contains("Pay 10 points").click();
    cy.get("button").contains("+3").should("exist");

    cy.react("App").should("contain.text", "Current Score: 10");
    cy.get("button").contains("Pay 10 points").click();
    cy.get("button").contains("+4").should("exist");

    cy.react("App").should("contain.text", "Current Score: 0");
  });

  it("should hide the 'Current Score' text and incrementor buttons", () => {
    Cypress._.times(25, () => {
      cy.get("button").contains("+4").click();
    });

    cy.react("App").should("not.contain.text", "Current Score");
    cy.get("button").contains("+4").should("not.exist");
    cy.get("button").contains("Pay 10 points").should("not.exist");
  });

  it("should show the 'You Win!' text and a 'Play again?' button", () => {
    cy.react("App").should("contain.text", "You Win!");
    cy.get("button").contains("Play again?").should("exist");
  });

  it("clicking the 'Play again?' button resets the game", () => {
    cy.get("Button").contains("Play again?").click();

    cy.react("App").should("contain.text", "Current Score: 0");
  });

  it("should allow for the game to be fully played again", () => {
    Cypress._.times(10, () => {
      cy.get("button").contains("+1").click();
    });

    cy.contains("Pay 10 points to change from +1 to +2").click();

    Cypress._.times(5, () => {
      cy.get("button").contains("+2").click();
    });

    cy.contains("Pay 10 points to change from +2 to +3").click();

    Cypress._.times(4, () => {
      cy.get("button").contains("+3").click();
    });

    cy.contains("Pay 10 points to change from +3 to +4").click();

    Cypress._.times(25, () => {
      cy.get("button").contains("+4").click();
    });

    cy.contains("You Win!");
  });
});

describe("Layout", () => {
  it("should show the text 'Current Score'", () => {
    cy.react("App").contains("Current Score");
  });

  it("should have a `button` element with the incrementor value", () => {
    cy.react("App").contains("+1");
  });

  it("should have a `button` element to increase the incrementor", () => {
    cy.react("App").contains("Pay 10 points to change from +1 to +2");
  });
});

describe("HomePage", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"));
  it("has the correct title", () => {
    cy.get("h1").should("have.text", "Welcome to our page!");
  });

  it("has the correct title", () => {
    cy.get("a").contains("Housing benefit").click();
    cy.get("h1").should("have.text", "Housing benefit application form");
    cy.url().should("eq", "http://localhost:3000/flat");
  });

  it("I18n", () => {
    cy.get("h1").should("have.text", "Welcome to our page!");
    cy.get("select").select("de");
    cy.get("h1").should("have.text", "Willkommen auf unserer Seite!");
  });
});

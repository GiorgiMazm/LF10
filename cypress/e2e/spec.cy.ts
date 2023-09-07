describe("HomePage", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.text", "Welcome to our page!");
  });
});

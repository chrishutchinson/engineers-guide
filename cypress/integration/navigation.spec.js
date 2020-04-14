describe("Navigation", () => {
  it("should navigate home when the title heading element is clicked", () => {
    cy.visit("/to/an-engineers-guide");

    cy.get("h1").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});

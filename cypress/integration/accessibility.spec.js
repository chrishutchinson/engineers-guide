describe("Accessibility", () => {
  it('should show the "Skip to main content" link when the reader navigates with the tab key', () => {
    cy.visit("/");

    cy.tab();

    cy.get('a[href="#main"]').isInViewport();
  });
});

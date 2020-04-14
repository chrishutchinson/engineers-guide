Cypress.Commands.add("isInViewport", { prevSubject: true }, (subject) => {
  const bottom = Cypress.$(cy.state("window")).height();
  const rect = subject[0].getBoundingClientRect();

  expect(rect.top).not.to.be.greaterThan(bottom);
  expect(rect.bottom).not.to.be.greaterThan(bottom);
  expect(rect.left).not.to.be.lessThan(0);

  return subject;
});

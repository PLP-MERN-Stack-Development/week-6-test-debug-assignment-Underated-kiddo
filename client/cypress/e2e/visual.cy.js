describe('Visual Regression', () => {
  it('should match the login page snapshot', () => {
    cy.visit('/login');
    cy.matchImageSnapshot();
  });
});

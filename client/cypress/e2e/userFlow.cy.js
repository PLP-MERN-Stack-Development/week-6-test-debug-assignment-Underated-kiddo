describe('User Flow', () => {
  it('should allow user to register, login, and create a post', () => {
    cy.visit('/register');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('button#create-post').click();
    cy.get('input[name="title"]').type('My First Post');
    cy.get('textarea[name="content"]').type('Hello world!');
    cy.get('button[type="submit"]').click();
    cy.contains('My First Post');
  });
});

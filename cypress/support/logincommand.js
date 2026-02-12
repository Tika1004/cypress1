//login ფუნქციონალისთვის

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login'); 
  cy.get('#loginFrm_loginname').type(email); 
  cy.get('#loginFrm_password').type(password);
  cy.get('button[title="Login"]').click();
  cy.url().should('include', 'account');})
  
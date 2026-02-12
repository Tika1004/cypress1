//Edit account details

describe('Automation Test Store', () => {

  it('Edit account details', () => {
    cy.login('tika01', 'tika.01');
    cy.get('a[href*="edit"]').click(); 
    cy.get('#AccountFrm_firstname').clear().type('tika'); 
    cy.get('#AccountFrm_lastname').clear().type('bitsadze'); 
    cy.get('#AccountFrm_email').clear().type('biwadzetika@gmail.com');
    cy.get('button[title="Continue"]').click();
    cy.get('.alert-success').should('contain.text', 'Success: Your account has been successfully updated.');
  });

  
  it('Edit or add address', () => {
    cy.login('tika01', 'tika.01');
    cy.get('a[href*="address"]').click();
    cy.get('#AddressFrm_firstname').clear().type('tika');
    cy.get('#AddressFrm_lastname').clear().type('bitsadze');
    cy.get('#AddressFrm_street_address').clear().type('jnf rmnjw errfm 1234');
    cy.get('#AddressFrm_city').clear().type('Devon');
    cy.get('#AddressFrm_postcode').clear().type('1234');
    cy.get('#AddressFrm_country_id').select('United Kingdom');
    cy.get('button[title="Continue"]').click();
    cy.get('.alert-success').should('contain.text', 'Your address has been successfully updated.');
  });

  
  it('Change password', () => {
    cy.login('tika01', 'tika.01');
    cy.get('a[href*="Change password"]').click();
    cy.get('#AccountFrm_old_password').type('tika.01'); 
    cy.get('#AccountFrm_password').type('Tika2003'); 
    cy.get('#AccountFrm_confirm').type('Tika2003'); 
    cy.get('button[title="Continue"]').click();
    cy.get('.alert-success').should('contain.text', 'Success: Your password has been successfully updated.');
  });

});

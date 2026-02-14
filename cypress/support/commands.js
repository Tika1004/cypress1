
Cypress.Commands.add('registration', (data) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/create') //აქ გაწერის გარეშეც შესაძლებელია, config ფაილში baseUrl-ის მითითებით,თუმცა ასე უფრო გასაგებია ჩემთვის :))
  cy.get('#AccountFrm_firstname').type(data.firstname)
  cy.get('#AccountFrm_lastname').type(data.lastname)
  cy.get('#AccountFrm_email').type(data.email)
  cy.get('#AccountFrm_telephone').type(data.phone)
  cy.get('#AccountFrm_password').type(data.password)
  cy.get('#AccountFrm_address_1').type(data.address1)
  cy.get('#AccountFrm_city').type(data.city)
  cy.get('#AccountFrm_zone_id').select(data.state) 
  cy.get('#AccountFrm_postcode').type(data.zipcode)
  cy.get('#AccountFrm_country_id').select(data.country) 
  cy.get('#AccountFrm_telephone').type(data.phone)
  cy.get('#AccountFrm_loginname').type(data.loginname)   
  cy.get('#AccountFrm_password').type(data.password)     
  cy.get('#AccountFrm_confirm').type(data.password)
  cy.get('#AccountFrm_agree').check()                
  cy.get('button[title="Continue"]').click() 

})

Cypress.Commands.add('login', (user) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login');
  cy.get('#loginFrm_loginname').type(user.email)  
  cy.get('#loginFrm_password').type(user.password)     
  cy.get('button[title="Login"]').click()      
});

Cypress.Commands.add('loginIncorrect', (user) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login');
  cy.get('#loginFrm_loginname').type(user.incorrectEmail);
  cy.get('#loginFrm_password').type(user.incorrectPassword);
  cy.get('button[title="Login"]').click();
});
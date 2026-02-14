import userdata from '../fixtures/data.json';

describe('Test case 1: Register User ', () => {
    it('should register a new user successfully', () => { //თავად შემომთავაზა ეს text და აღარ შევცვალე
        cy.registration(userdata)
    })
})
it('Test case 2: Login with valid information', () => {
    cy.login(userdata)
})
it('Test case 3: Login with invalid information', () => {
    cy.loginIncorrect(userdata)
})
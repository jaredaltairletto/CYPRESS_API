const dataJson = require('../fixtures/MyBody.json') // FOR_32-33

describe('INTERCEPTS', () => {
it('', () => {
        
        cy.visit('https://gorest.co.in/rest-console')
        cy.intercept('GET', 'https://gorest.co.in/public/v2/users').as('idk')
    
        cy.get('[id="rsq_send"]').click()
        cy.wait('@idk').then(Anything1 =>{
            expect(Anything1.response.body).to.have.length(10)
    })
});
it('mocking with intercept', () => {
        
        cy.visit('https://gorest.co.in/rest-console')
        cy.intercept('GET', 'https://gorest.co.in/public/v2/users', {anything:5, name: 'Vanya'}).as('mocking')
        
        cy.get('[id="rsq_send"]').click()
        cy.wait('@mocking').then(mockingRES =>{
            expect(mockingRES.response.body.anything).to.eq(5)
            expect(mockingRES.response.body).to.have.property('name', 'Vanya')
    })
});
it.only('mocking with intercept with dynamic fixture', () => {
        
        cy.visit('https://gorest.co.in/rest-console')
        cy.intercept('GET', 'https://gorest.co.in/public/v2/users', {fixture: 'MyBody.json'}).as('mockingDYNAMIC')
            
        cy.get('[id="rsq_send"]').click()
        cy.wait('@mockingDYNAMIC').then(mockingDYNAMICres =>{
            expect(mockingDYNAMICres.response.body).to.have.property("gender", dataJson.gender) //_1
            expect(mockingDYNAMICres.response.body).to.have.property("status", dataJson.status) //_1
    })
});
});

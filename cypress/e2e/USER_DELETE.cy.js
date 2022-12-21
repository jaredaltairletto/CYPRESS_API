const dataJson = require('../fixtures/MyBody');
const { email } = require('../support/Faker');

describe('POST api user test', () => {
    let accesToken = '72e78981270b629bd33b2bd5dcb2503d8ba161df413eddc6434c2d90fcbbda8d'
    it('get users', () => {
         cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization': 'Bearer ' + accesToken
            },
            body:{
                "email": email,
                "name": dataJson.name,
                "gender": dataJson.gender, 
                "status": dataJson.status
            } 
         }).then((response)=>{
            
            expect(response.status).to.eq(201)
            expect(response.body).has.property('email', email)
            expect(response.body).has.property('name', dataJson.name)
            expect(response.body).has.property('gender', dataJson.gender)
            expect(response.body).has.property('status', dataJson.status)
         }).then((response) => {
            const userIDd = response.body.id
            cy.log("user id is" + userIDd)
            cy.request({
                method : 'DELETE',
                url : 'https://gorest.co.in/public/v2/users/' + userIDd,
                headers : {
                    'Authorization' : 'Bearer ' + accesToken
                }
            }).then((response) =>{
                expect(response.status).to.eq(204)
                expect(response.body).to.eq('')
            })     
         }) 
    });
});
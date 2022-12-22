const { email } = require('../support/Faker');
const dataJson = require('../fixtures/MyBody');

describe('PUT api user test', () => {
    let accesToken = '72e78981270b629bd33b2bd5dcb2503d8ba161df413eddc6434c2d90fcbbda8d'
    it('get users', () => {
         cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + accesToken
            }         
         }).then((response)=>{
            const ID_ToUPD = response.body[3].id
            cy.request({
                method : 'PUT',
                url : 'https://gorest.co.in/public/v2/users/' + ID_ToUPD,
                headers : {
                    'Authorization' : 'Bearer ' + accesToken
                },
                body:{
                    "email": email,
                    "name": "UPDATED_USER",
                    "gender": dataJson.gender, 
                    "status": dataJson.status
                } 
            })
            .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("gender", dataJson.gender) 
            })
         })
    });
});
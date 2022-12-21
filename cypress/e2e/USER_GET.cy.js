describe('get api user test', () => {
    let accesToken = '72e78981270b629bd33b2bd5dcb2503d8ba161df413eddc6434c2d90fcbbda8d'
    it('GET users', () => {
         cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + accesToken
            }         
         }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].gender).to.eq("male")
         })
    });
});
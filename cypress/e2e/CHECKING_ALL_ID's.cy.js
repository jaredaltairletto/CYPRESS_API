describe('get api user test', () => {
    let accesToken = '72e78981270b629bd33b2bd5dcb2503d8ba161df413eddc6434c2d90fcbbda8d'
    it('get users', () => {
         cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + accesToken
            }         
         }).then((response)=>{
            const ALL_BODIES = response.body
            return ALL_BODIES
         })
         .then((ALL_BODIES) => {
            for (let i = 0; i < ALL_BODIES.length; i++) {
                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v2/users/' + ALL_BODIES[i].id,
                    // ALL_BODIES <-BODY, [i] <- CURRENT BODY, .id <- KEY "id" IN EVERY BODY,
                    headers : {
                        'Authorization' : 'Bearer ' + accesToken
                    }    
                })
                .then((response) => {
                    expect(response.body).to.have.property('id', ALL_BODIES[i].id)
                })
            }
         })
    });
});
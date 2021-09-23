describe("Login Scenario", () => {


it("test valid login", () =>{
  
  cy.Login("username", "password")

})





}) 


//cy.request('https://jsonplaceholder.cypress.io/comments').as('c')
//aliasing request
// cy.get('@c').should((response) => {
//   expect(response.body).to.have.length(100)
//   expect(response).to.have.property('headers')
// })
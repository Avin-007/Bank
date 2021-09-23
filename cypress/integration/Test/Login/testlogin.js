


describe("", () =>{

// it("checks api ", () =>{

//   cy.request('https://uatbank.yoapp.com.np/').as('c')
// //aliasing request
// cy.get('@c').should((response) => {
//    expect(response.body).to.have.length('5067')
//    expect(response).to.have.property('headers')
// })


// })


 it('GET - read', () =>{
cy.request('GET', 'https://uatbank.yoapp.com.np/').then ((response) =>{
  expect(response).to.have.property('status', 200)
})

 })
})


describe("Test Bank user management functionalities", () =>{

it("Adds new bank user", () =>{

  cy.contains("Bank User Management").click()
  cy.contains("Add New").click()

  cy.get('#UserName').type("CoopUser")
cy.get('#FullName').type("Wepay Coop User")
cy.get('#UserEmail').type("test@wepay.com")
cy.get('#UserMobileNo').type("9841023456")
cy.get('#Is_Primary').click()
cy.get('.btn-success').click()
cy.get('.modal-footer > .btn').click()




})



})
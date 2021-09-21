Cypress.Commands.add("Login", (username, password) => { 

  cy.visit ("https://uatcoopbank.yoapp.com.np/")
  cy.get('#user_name').type("Avin")
  cy.get('#user_password').type("B5173D3C")
  cy.get('.btn').click()

  
  })
  


  

    before(() => {


  cy.Login("username", "password")
    
  })
  
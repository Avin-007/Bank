          describe("Test Bank user management functionalities", () =>{

               it.skip("Adds new bank user", () =>{

                        cy.contains("Bank User Management").click()
                        cy.contains("Add New").click()
                        cy.get('#UserName').type("BankUser1")
                      cy.get('#FullName').type("Test User")
                      cy.get('#UserEmail').type("bnkusrmail@mailinator.com")
                      cy.get('#UserMobileNo').type("9845323250")
                      // cy.get('#Is_Primary').click()
                      cy.contains('Save').click()
                      cy.get('.modal-footer > .btn').click()


                      })

                      it.skip("view details of the user", () => {
                        cy.contains("Bank User Management").click()
                        cy.get('.btn btn-info').click()

                        // cy.get('.fas fa-eye').then(function($select){
                        //   $select.val("1").click()
                      })



                      })

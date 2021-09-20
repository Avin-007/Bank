      describe("profile section scenarios", ()=>{


        it("checks profile details", ()=>{

          cy.contains('Avin').click()
          cy.contains("Profile").click()


        })


        it("changes password", () =>{

                  cy.contains("Change Password").click()
                  cy.get('#passwordModel_OldPassword').type("")
                  cy.get('#passwordModel_NewPassword').type("")
                  cy.get('#passwordModel_ConfirmPassword').type("")
                  cy.contains('Submit').click()


        })

     


      })
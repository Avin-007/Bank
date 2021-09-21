

    describe("Bank Coop Management Functions", () => {

            it("Add new Co-operative", () => {

              cy.contains("Bank Co-Operative Management").click()
              cy.contains("Add New").click()
              cy.get('#VendorId').select("Hamro Technology")
                       //Co-operative Name
              cy.get('[name=CoOpName]').type("")
                //Memberid
              cy.get('[name=CoOpCode]').type("")

              //CoopEmailAddress
              cy.get('[name=CoopEmailAddress]').type("")
              cy.get('[name=CoopPhoneNumber]').type("")
              cy.get('[name=ContactPersonName]').type("")
              cy.get('[name=ContactPersonEmailAddress]').type("")
              cy.get('[name=ContactPersonPhoneNumber]').type("")
              cy.get('[name=CoopSwiftCode]').type("")
              cy.get('[name=PanNo]').type("")
              cy.get('[name=RegistrationNumber]').type("")


              //Co-op Address 

                          //province 
              cy.get('[name=Province]').select("")
                         //District
             cy.get('[name=District]').select("")     
                //VDC/Municipility
                cy.get('[name=VDCMuncipality]').select("")   

                //Wardno.
                cy.get('[name=WardNo]').type("") 
                
                //Street
                cy.get('[name=Street]').type("") 


                          //Co-Operative Account Details 
                                 //Nostro Details
                          cy.get('[name=NostroAccount').type("") 
                          cy.get('[name=NostroAccountBranch]').type("") 
                          cy.get('[name=NostroAccountNumber]').type("")
                          
                                 //Vstro Details
                          cy.get('[name=VostroAccount]').type("") 
                          cy.get('[name=VostroAccountBranch]').type("") 
                          cy.get('[name=VostroAccountNumber]').type("") 

                          //Earning Account Details
                          cy.get('[name=EarningAccountName]').type("") 
                          cy.get('[name=EarningAccountBranch]').type("") 
                          cy.get('[name=EarningAccountNumber]').type("") 

                                //Comission Account Details
                          cy.get('[name=CommissionAccountName]').type("") 
                          cy.get('[name=CommissionAccountBranch]').type("") 
                          cy.get('[name=CommissionAccountNumber]').type("") 
                                
                          //Select Logo
                          const yourFixturePath = ''
                          cy.get('[name=LogoFile]').attachFile(yourFixturePath)
                          

                  


                

                
                
                


              
              

              
              




            })


    })
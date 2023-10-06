/// <reference types= "cypress" />
describe('this is to test login page', () => {
  
    // it('test login  with correct user name with correct password',()=>{
      // cy.visit('https://www.saucedemo.com/')
    // })
     it('test login  with correct user name with incorrect password',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      cy.get('.btn').click({multiple: true});

      // cy.get('#APjFqb').type(' khaled albgour{enter}')
      // cy.get('.FPdoLc > center > .gNO89b').click()/
    })  
  
})
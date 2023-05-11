import { SignupPage} from "./pages/signup_page"

const signupPage = new SignupPage();

describe('sign up sst', () => {
  it('signup page', () => {
    cy.visit('/')
    
    cy.get('a[href="/workspace/signup"].jss39').click();
    cy.wait(2000)

    cy.get('.jss109').find('button').should('contain', 'Single License')
    cy.get('.jss110').find('button').should('contain', 'Multiple Licenses')
    cy.get('.jss111').find('button').should('contain', 'Free Trial')
    cy.wait(5000)
  })

  it('single license successful', () => { 
    cy.visit('/signup')
    cy.contains('Single License').click();
    cy.wait(2000)
     
    signupPage.enterUserFirstName('Diversido'); cy.wait(2000)
    signupPage.enterUserLastName('Test'); cy.wait(2000)
    signupPage.enterUserEmail('test6@test.io');  cy.wait(2000)
    signupPage.enterUserPassword('password'); cy.wait(2000)
    signupPage.enterUserConfirmPassword('password'); cy.wait(2000)

    cy.contains('Next').click(); cy.wait(2000)
    
    signupPage.enterUserInstitution('SomeInstitution'); cy.wait(2000)
    signupPage.enterUserProfession(); cy.wait(2000)
    signupPage.enterUserExperience(); cy.wait(2000)
    signupPage.registerUser(); cy.wait(2000)
    
    cy.location('pathname').should('eq', '/workspace/purchase'); cy.wait(2000)
    cy.get('.MuiContainer-root > .MuiPaper-root > .jss31').should('contain', 'test6@test.io'); cy.wait(2000)
    
  })

  it.only('check if a new user was created in AWP', () => { 
    cy.openAWP(); cy.wait(2000)
    // cy.get('MuiCircularProgress-svg').should("not.be.visible");
    cy.location('hash').should('eq', '#/users'); cy.wait(2000)
    // cy.get(':nth-child(1) > .column-email').contains('test5@test.io');
    cy.get('tbody').contains('td', 'test6@test.io');cy.wait(2000)
  })

})
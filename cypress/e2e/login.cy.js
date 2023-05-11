describe('Login', () => { 
    beforeEach(() => { 
        cy.visit('/workspace/login')
        cy.wait(2000)
        cy.fixture('login_testdata').then(function (testdata){
            this.testdata = testdata
        })
    })

    it.skip('login with valid data', function () { 
        cy.get('.jss46').find('input[name="email"]').type(this.testdata.valid.email);
        cy.wait(2000)
        cy.get('.jss46').find('input[name="password"]').type(this.testdata.valid.password);
        cy.wait(2000)
        cy.get('.jss46').find('button').click();
        cy.location('pathname').should('eq', '/workspace/dashboard/users');
    })

    it('login with valid data with login command', function(){ 
        cy.loginSST(this.testdata.valid.email, this.testdata.valid.password); 
        cy.location('pathname').should('eq', '/workspace/dashboard/users');
    })

    it('login with INvalid password', function(){ 
        cy.loginSST(this.testdata.invalidPass.email, this.testdata.invalidPass.password); 
        cy.get('#notistack-snackbar').should('contain', this.testdata.invalidPass.snackbar);
    })

    it('login with INvalid email', function(){ 
        cy.loginSST(this.testdata.invalidEmail.email, this.testdata.invalidEmail.password); 
        cy.get('#notistack-snackbar').should('contain', this.testdata.invalidEmail.snackbar);
    })

    it('login with not confirmed account', function(){ 
        cy.loginSST(this.testdata.nonConfirmed.email, this.testdata.nonConfirmed.password); 
        cy.get('#notistack-snackbar').should('contain',this.testdata.nonConfirmed.snackbar);
    })

    it('login with AICC LMS account', function() { 
        cy.loginSST(this.testdata.AICC.email, this.testdata.AICC.password)
        cy.get('#notistack-snackbar').should('have.text', this.testdata.AICC.snackbar);
    })

    it.skip('login with AICC LMS account using invoke', function(){ 
        cy.loginSST(this.testdata.AICC.email, this.testdata.AICC.password)
        cy.get('#notistack-snackbar').invoke('text').then(text => { 
            expect(text).to.equal(this.testdata.AICC.snackbar)
        })
        cy.wait(2000); 
    })

    it('login with SCORM LMS account', function(){ 
        cy.loginSST(this.testdata.SCORM.email, this.testdata.SCORM.password)
        cy.get('#notistack-snackbar').should('have.text', this.testdata.SCORM.snackbar);
    })
})


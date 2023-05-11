export class SignupPage { 

    signup_input_firstName = 'input[name="firstName"]'; 
    signup_input_lastName = 'input[name="lastName"]';   
    signup_input_email = 'input[name="email"][type="email"]'; 
    signup_input_password = 'input[name="password"][type="password"]';
    signup_input_confirmPassword = 'input[name="passwordConfirm"][type="password"]';
    signup_input_institution = 'input[name="realInstitutionName"]'; 
    signup_input_profession = '#mui-component-select-profession';
    signup_input_specialty = '#mui-component-select-specialty'; 
    signup_input_specialty_field = 'input[name="professionInput"]'
    signup_input_experience = '#mui-component-select-experience';
    signup_input_list = 'ul[role="listbox"] > li'; 
    signup_button_register = '.MuiGrid-justify-content-xs-center > .MuiButton-containedPrimary'; 


    getRandomInt(max) { 
        return Math.floor(Math.random() * max);
    }

    enterUserFirstName(firstName){ 
        cy.get(this.signup_input_firstName).type(firstName); 
    }

    enterUserLastName(lastName){ 
        cy.get(this.signup_input_lastName).type(lastName); 
    }

    enterUserEmail(email) { 
        cy.get(this.signup_input_email).type(email); 
    }

    enterUserPassword(password) { 
        cy.get(this.signup_input_password).type(password); 
    }
    enterUserConfirmPassword(password) { 
        cy.get(this.signup_input_confirmPassword).type(password); 
    }
    

    enterUserInstitution(institution) { 
        cy.get(this.signup_input_institution).type(institution); 
    }

    chooseFromList(randomNumber) { 
        cy.get(this.signup_input_list).then(list => { 
            cy.wrap(list).eq(randomNumber).click();
        })
    }

    enterUserSpecialty(specialtyNumber) {
        if (specialtyNumber === 0) {
            cy.get(this.signup_input_specialty_field).type('Doesn\'t matter');
        } else { 
            cy.get(this.signup_input_specialty).click(); 
            this.chooseFromList(this.getRandomInt(specialtyNumber));
        }    
    }

    enterUserProfession() { 
        let profNumber = this.getRandomInt(5); 
        // let profNumber = 5; 

        cy.get(this.signup_input_profession).click(); 
        this.chooseFromList(profNumber);

        switch (profNumber) { 
            case 0: this.enterUserSpecialty(20);
                break; 
            case 1: this.enterUserSpecialty(15);
                break; 
            case 2: this.enterUserSpecialty(10);
                break; 
            case 3: this.enterUserSpecialty(18);
                break; 
            case 4: this.enterUserSpecialty(6);
                break; 
            case 5: this.enterUserSpecialty(0);
                break; 
        }
    }

    enterUserExperience() { 
        cy.get(this.signup_input_experience).click(); 
        this.chooseFromList(this.getRandomInt(6));
    }

    registerUser() { 
        cy.get(this.signup_button_register).click(); 
    }

}
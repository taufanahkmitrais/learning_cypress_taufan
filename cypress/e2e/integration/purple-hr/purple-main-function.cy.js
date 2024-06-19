describe('Purple main functional Test', () => {
  context('when successfully logged in', () =>{
    beforeEach(() => {
      cy.session('loggedInState', () => {
        cy.purple_login(Cypress.env('microsoft_email'), Cypress.env('microsoft_password'));
      })
  
      cy.visit(Cypress.env('purple_site'));
    });
  
    context('when visiting the Dashboard page', () =>{
      beforeEach(() =>{
        // visit the dashboard page
        cy.get('li.font-bold > button:nth-child(1)').click();
      });

      it('has a navigateable dashboard page', () => {
        cy.get('li.font-bold > button:nth-child(1)').should('exist');
      });
    
      it('has a full name content', () => {
        cy.contains('Hi ' + Cypress.env('microsoft_fullname') + ',').should('exist');
      });
        
      it('has a Pie chart', () => {
        cy.get('div.flex-grow:nth-child(1) > div:nth-child(3) > div:nth-child(1) > canvas:nth-child(1)').should('exist');
      });
    
      it('has a Bar chart', () => {
        cy.get('.ml-4 > canvas').should('exist');
      });
    });

    context('when visiting the HR Administration - Role Privileges page', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Role Privileges
        cy.get(':nth-child(2) > .mds-menu-dropdown > :nth-child(1)').click();
      });
    
      it('has Role Privilege title', () => {
        cy.contains('Role Privilege').should('exist');
      });
        
      it('has User Role column', () => {
        cy.contains('User Role').should('exist');
      });
    
      it('has Description column', () => {
        cy.contains('Description').should('exist');
      });

      it('has Access column', () => {
        cy.contains('Access').should('exist');
      });

      it('has Status column', () => {
        cy.contains('Status').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });
    });

    context('when visiting the HR Administration - Managed User Roles page', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Managed User Roles
        cy.get('li.mds-menu-dropdown-toggle:nth-child(2) > button:nth-child(1)').click();
      });
    
      it('has Users title', () => {
        cy.contains('Users').should('exist');
      });
        
      it('has No column', () => {
        cy.contains('No').should('exist');
      });
    
      it('has Employee Name column', () => {
        cy.contains('Employee Name').should('exist');
      });

      it('has Email column', () => {
        cy.contains('Email').should('exist');
      });

      it('has Status column', () => {
        cy.contains('Status').should('exist');
      });

      it('has User Role(s) column', () => {
        cy.contains('User Role(s)').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });
    });

    context('when visiting the HR Administration - Master Data page', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Master Data
        cy.get('li.mds-menu-dropdown-toggle:nth-child(3) > button:nth-child(1)').click();
      });
    
      it('has Unselected option', () => {
        cy.get('[data-testid="master-data-select"]').select('Unselected');

        cy.contains('Unselected').should('exist');
      });
        
      it('has Position option', () => {
        cy.get('[data-testid="master-data-select"]').select('Position');

        cy.contains('Position').should('exist');
      });
    
      it('has Country option', () => {
        cy.get('[data-testid="master-data-select"]').select('Country');

        cy.contains('Country').should('exist');
      });

      it('has Religion option', () => {
        cy.get('[data-testid="master-data-select"]').select('Religion');

        cy.contains('Religion').should('exist');
      });

      it('has Marital Status option', () => {
        cy.get('[data-testid="master-data-select"]').select('Marital Status');

        cy.contains('Marital Status').should('exist');
      });
    });

    context('when visiting the HR Administration - Locations page', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Locations
        cy.get('.mds-menu-dropdown > :nth-child(4) > button').click();
      });
    
      it('has Location Title', () => {
        cy.contains('Location').should('exist');
      });
        
      it('has No column', () => {
        cy.contains('No').should('exist');
      });
    
      it('has Office Name column', () => {
        cy.contains('Office Name').should('exist');
      });

      it('has City column', () => {
        cy.contains('City').should('exist');
      });

      it('has Country column', () => {
        cy.contains('Country').should('exist');
      });

      it('has Phone column', () => {
        cy.contains('Phone').should('exist');
      });

      it('has Number of Employees column', () => {
        cy.contains('Number of Employees').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });
    });

    context('when visiting the HR Administration - Audit Trail page', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Audit Trail
        cy.get('.mds-menu-dropdown > :nth-child(5)').click();
      });
    
      it('has Audit Trail Title', () => {
        cy.contains('Audit Trail').should('exist');
      });
        
      it('has Date column', () => {
        cy.contains('Date').should('exist');
      });
    
      it('has Correlation Id column', () => {
        cy.contains('Correlation Id').should('exist');
      });

      it('has User Name column', () => {
        cy.contains('User Name').should('exist');
      });

      it('has Service column', () => {
        cy.contains('Service').should('exist');
      });

      it('has Entity column', () => {
        cy.contains('Entity').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });

      it('has Changes column', () => {
        cy.contains('Changes').should('exist');
      });
    });

    context('when Sign Out', () =>{
      beforeEach(() =>{
        // Click HR Administration
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Sign Out
        cy.get('.bottom-0 > .flex').click();
      });
    
      it('has Sign out Confirmation', () => {
        cy.contains('Sign out Confirmation').should('exist');
      });
        
      it('has Sign Out Confirmation Submit Button', () => {
        cy.get('[data-testid="delete-confirmation-submit"]').should('exist');
      });
    
      it('can Sign Out', () => {
        cy.get('[data-testid="delete-confirmation-submit"]').click();

        cy.contains('Login to your Account').should('exist');
      });
    });
  });

  context('when failed to log in', () =>{
    it('should not be able to log in', () => {
      // Visit purple login page
      cy.visit(Cypress.env('purple_site') + "/login");
        
      // get the login button
      cy.get('[data-testid="login-button"]').click();

      // login via microsoft account
      cy.origin('https://login.live.com', {
        args: { email: Cypress.env('microsoft_email'), password: 'falsepassword' }
      }, ({ email, password }) => {
        // input the email
        cy.get('#i0116').type(email);

        // click next button
        cy.get('#idSIButton9').click();

        // input password
        cy.get('#i0118').type(password);

        // click the login button
        cy.get('#idSIButton9').click();

        // click the stay signed in yes button
        cy.contains("Your account or password is incorrect. If you don't remember your password").should('exist');
      });
    });
  });
})
// cypress/integration/instagram.spec.js

describe('Instagram main functional Test', () => {
  beforeEach(() => {
    cy.session('loggedInState', () => {
      // Visit Instagram login page
      cy.visit('https://www.instagram.com');
  
      // get login button
      cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click();
  
      // Enter username and password
      cy.get('input[name="username"]').type(Cypress.env('ig_username'));
      cy.get('input[name="password"]').type(Cypress.env('ig_password'));
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // wait for 10 second to login
      cy.wait(10000);
  
      // Wait for login to complete
      cy.url().should('not.include', '/accounts/login/');
    });

    // Visit Instagram home page
    cy.visit('https://www.instagram.com');
  });

  it('navigates to the user profile', () => {
    // get profile button
    cy.get(':nth-child(8) > :nth-child(1) > .x4k7w5x > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('exist');
  });

  it('navigates the home page', () => {
    // get home button to see my profile
    cy.get('.x1iyjqo2 > :nth-child(1) > :nth-child(1) > .x4k7w5x > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the search page', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the explore page', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the reels page', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the messages page', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the notifications page', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  it('navigates the create post', () => {
    // get home button to see my profile
    cy.get('.x1xgvd2v > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click();

    // Check if the profile page is loaded
    cy.contains(Cypress.env('ig_username')).should('not.exist');
  });

  });

  describe('Instagram main functional Test Negative case', () => {
    it('log in with false account', () => {
      // Visit Instagram login page
      cy.visit('https://www.instagram.com');
  
      // get login button
      cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click();
  
      // Enter username and password
      cy.get('input[name="username"]').type('thetestacc');
      cy.get('input[name="password"]').type('falsepasword');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      cy.contains('Sorry, your password was incorrect.').should('exist');
    });
  });

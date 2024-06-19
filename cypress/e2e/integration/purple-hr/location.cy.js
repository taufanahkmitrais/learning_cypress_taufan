import { generateRandomString } from "../../../support/purple-functions";

describe('Purple main functional Test', () => {
  beforeEach(() => {
    cy.session('loggedInState', () => {
      cy.purple_login(Cypress.env('microsoft_email'), Cypress.env('microsoft_password'));
    })

    cy.visit(Cypress.env('purple_site'));

     // Click HR Administration
     cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

     // Click Locations
     cy.get('.mds-menu-dropdown > :nth-child(4) > button').click();
  });

  context('when creating new location record', () => {
    const newString = generateRandomString(10)
    const newPhone = '+62' + generateRandomString(10, true)

    const editString = generateRandomString(10)
    const editPhone = '+62' + generateRandomString(10, true)

    it('should create a successful new location record', () => {
      // click add location button
      cy.get('[class="w-[159px] pl-4 pr-6 py-3 bg-violet-800 rounded-[50px] justify-center items-center gap-1.5 flex"]').click();

      // type office name
      cy.get('.bg-stone-50 > :nth-child(1) > .flex > .px-2').type(newString);

      // Open the dropdown
      cy.get('[class="select__control css-13cymwt-control"]').click();

      // Select an option (assuming the options are visible in the DOM)
      cy.get('#react-select-2-option-0').click();

      // type state/province
      cy.get('div.pb-4:nth-child(2) > div:nth-child(2) > div:nth-child(2)').type(newString);

      // type city 
      cy.get('div.justify-start:nth-child(3) > div:nth-child(1) > div:nth-child(2)').type(newString);

      // type zip postal code
      cy.get('div.justify-start:nth-child(3) > div:nth-child(2) > div:nth-child(2)').type(newString);

      // type newPhone number
      cy.get('div.justify-start:nth-child(4) > div:nth-child(1) > div:nth-child(2)').type(newPhone);

      // type the fax
      cy.get('div.justify-start:nth-child(4) > div:nth-child(2) > div:nth-child(2)').type(newString)

      // type address
      cy.get('div.flex:nth-child(5) > div:nth-child(2)').type(newString);

      cy.get('[data-testid="button-primary-modal"]').click();

      cy.contains('Data Inserted Successfully').should('exist');
    });

    it('should be able to search the new location', () => {
      cy.get('[class="w-[397px] h-11 px-2 py-2.5 bg-gray-50 rounded-[3px] border-2 border-gray-200 justify-center items-center gap-1.5 inline-flex"]').type(newString);

      // search process takes around 1-4 seconds normally
      cy.wait(4000);

      cy.contains(newPhone).should('exist');
    });

    it('should be able to edit the new location', () => {
      cy.get('[class="w-[397px] h-11 px-2 py-2.5 bg-gray-50 rounded-[3px] border-2 border-gray-200 justify-center items-center gap-1.5 inline-flex"]').type(newString);
      
      // search process takes around 1-4 seconds normally
      cy.wait(4000);

      // edit the location record
      cy.get("[aria-label='Edit']").click();

      cy.contains(newPhone).should('exist');

      cy.contains("Edit Location").should('exist');

      // type office name
      cy.get('.bg-stone-50 > :nth-child(1) > .flex > .px-2').clear().type(editString);

      // Open the dropdown
      cy.get('[class="select__control css-13cymwt-control"]').click();

      // Select an option (assuming the options are visible in the DOM)
      cy.get('#react-select-2-option-1').click();

      // type state/province
      cy.get('div.pb-4:nth-child(2) > div:nth-child(2) > div:nth-child(2)').clear().type(editString);

      // type city 
      cy.get('div.justify-start:nth-child(3) > div:nth-child(1) > div:nth-child(2)').clear().type(editString);

      // type zip postal code
      cy.get('div.justify-start:nth-child(3) > div:nth-child(2) > div:nth-child(2)').clear().type(editString);

      // type newPhone number
      cy.get('div.justify-start:nth-child(4) > div:nth-child(1) > div:nth-child(2)').clear().type(editPhone);

      // type the fax
      cy.get('div.justify-start:nth-child(4) > div:nth-child(2) > div:nth-child(2)').clear().type(editString)

      // type address
      cy.get('div.flex:nth-child(5) > div:nth-child(2)').clear().type(editString);

      // submit the change
      cy.get('[data-testid="button-primary-modal"]').click();

      cy.contains('Data Updated Successfully').should('exist');
    });

    it('should be able to search the edited location', () => {
      cy.get('[class="w-[397px] h-11 px-2 py-2.5 bg-gray-50 rounded-[3px] border-2 border-gray-200 justify-center items-center gap-1.5 inline-flex"]').type(editString);

      // search process takes around 1-4 seconds normally
      cy.wait(4000);

      cy.contains(editPhone).should('exist');
    });

    it('should be able to delete the data', () =>{
      cy.get('[class="w-[397px] h-11 px-2 py-2.5 bg-gray-50 rounded-[3px] border-2 border-gray-200 justify-center items-center gap-1.5 inline-flex"]').type(editString);
      
      // search process takes around 1-4 seconds normally
      cy.wait(4000);

      cy.contains(editPhone).should('exist');

      // click delete icon
      cy.get('[aria-label="Delete"]').click();

      // confirm delete
      cy.get('[class="px-6 py-3 bg-violet-800 rounded-[50px] justify-center items-center gap-3 flex"]').click();

      // make sure the record is deleted
      cy.contains(editPhone).should('not.exist');
    });
  });
});


describe('AppComponent', () => {

    beforeEach(() => {
        // cy.fixture('fashion.json').as('fashionDB');
        // cy.fixture('sports.json').as('sportsDB');

        // cy.server();

        // cy.route('https://api.fashbash.co/api/feed?page=0&categories=fashion',
        // '@fashionDB').as('fasion');

        // cy.route('https://api.fashbash.co/api/feed?page=0&categories=sports_outdoors',
        // '@sportsDB').as('sports');

        cy.visit('/');
    });
    it('should render items', () => {

        cy.contains('Hello');

        // cy.wait('@fasion');
        // cy.wait('@sports');
        
        cy.get('.col-3').should('have.length', 12);


    });

    it('should show sports items', ()=> {
        cy.get('.mat-tab-label').should('have.length', 2);

        cy.get('.mat-tab-label').last().click();

        cy.get('.title').its('length').should('be.gt', 1);

        cy.get('.title').first().should('contain', 'Andake Portable Camping Gas');

        

    });


    
});

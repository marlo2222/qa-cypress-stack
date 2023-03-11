/// <reference types="cypress" />

describe('Exemplo base para projeto cypress', () => {
    it('acessar base url', () => {
        cy.visit_home_page();
    });
});
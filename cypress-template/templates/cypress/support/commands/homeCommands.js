/// <reference types="cypress" />
import { Utils} from '../../support/utils/utils'

const utils = new Utils();
const environment = utils.getBaseUrl();

Cypress.Commands.add('visit_home_page', () => {
    cy.visit(environment.baseUrl);
});
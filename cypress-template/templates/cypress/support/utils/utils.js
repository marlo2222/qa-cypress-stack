export class Utils{
    
    getBaseUrl(){
        return Cypress.config(Cypress.env('environment'));
    };
};
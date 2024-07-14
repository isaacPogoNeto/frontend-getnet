// cypress/integration/pages/HomePage.js

import {el} from './elements'

class HomePage {
    visit() {
      cy.visit(Cypress.env("url"))
      cy.wait(1000)
    }
  
    goToHelpCenter() {
        cy.xpath(el.menuajuda).click({force: true})
        cy.xpath(el.menucentralajuda).click({force: true})
    }
  }
  
  export default HomePage
  
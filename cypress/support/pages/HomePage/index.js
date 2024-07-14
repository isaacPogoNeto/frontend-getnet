// cypress/integration/pages/HomePage.js

import {el} from './elements'

class HomePage {
    visit() {
      cy.visit(Cypress.env("url"))
      cy.wait(1000)
    }
  
    goToHelpCenter() {
        cy.xpath(el.menuHelp).click({force: true})
        cy.xpath(el.menuHelpCenter).click({force: true})
    }
  }
  
  export default HomePage
  
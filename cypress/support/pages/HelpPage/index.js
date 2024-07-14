// cypress/integration/pages/HelpPage.js
import {el} from './elements'


class HelpPage {
    search(keyword) {
        cy.get(el.clicksearch).type(`${keyword}{enter}`)
    }
  
    selectOption(optionText) {
      cy.contains(optionText).click()
    }
  
    verifyModalContent(expectedText) {
        cy.get(el.modalcontent).should('contain.text', expectedText)
    }
  }
  
  export default HelpPage
  
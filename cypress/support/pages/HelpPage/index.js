// cypress/integration/pages/HelpPage.js
import {el} from './elements'


class HelpPage {
    search(keyword) {
        cy.get(el.searchInput).type(`${keyword}{enter}`)
    }
  
    selectOption(optionText) {
      cy.contains(optionText).click()
    }
  
    verifyModalContent(expectedText) {
        cy.get(el.modalTitle).should('contain.text', expectedText)
    }
  }
  
  export default HelpPage
  
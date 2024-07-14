// cypress/integration/getnet_spec.js

import HomePage from '../support/pages/HomePage'
import HelpPage from '../support/pages/HelpPage'

describe('Teste de Front-end GetNet', () => {
  const homePage = new HomePage()
  const helpPage = new HelpPage()

  it('Verificar se a modal foi aberta com o texto explicativo', () => {
    // Acessar o site
    homePage.visit()

    // No menu "Ajuda", clicar em "Central de Ajuda"
    homePage.goToHelpCenter()

    // No campo de busca digitar a palavra-chave “Boleto”
    helpPage.search('Boleto')

    // Selecionar a opção “Eu concluí a negociação, de que forma receberei meu boleto?”
    helpPage.selectOption('Eu concluí a negociação, de que forma receberei meu boleto?')

    // Verificar se a modal foi aberta com a mensagem o texto explicativo a dúvida selecionada.
    helpPage.verifyModalContent('Eu concluí a negociação, de que forma receberei meu boleto?')
  })
})

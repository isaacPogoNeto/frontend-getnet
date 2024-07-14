## Projeto de Automação de Testes de Front-End com Cypress


### Descrição
Este projeto de automação de testes de front-end utiliza Cypress para validar a funcionalidade de busca na Central de Ajuda do site Getnet. 
Os testes incluem a validação de elementos visíveis na página e interações com o usuário.

### Pré-requisitos
 - Node.js instalado
 - Cypress instalado globalmente ou como dependência do projeto
 - IDE de sua preferência (VS Code, WebStorm, etc.)

## Configuração do Projeto
Clone o repositório para a sua máquina local:

- git clone https://github.com/seu-usuario/nome-do-repositorio.git
- cd nome-do-repositorio

Instale as dependências do projeto usando npm:

 - npm install

## Arquivos Principais
 - getnet_spec.js: Testes de integração utilizando Cypress.
 - HelpPage/elements.js: Seletores de elementos da página de ajuda.
 - HelpPage/index.js: Ações e interações na página de ajuda.
 - HomePage/elements.js: Seletores de elementos da página inicial.
 - HomePage/index.js: Ações e interações na página inicial.
 - commands.js: Comandos customizados do Cypress.
 - index.js: Configurações globais do Cypress.

## Como Executar os Testes

Para abrir a interface do Cypress e executar os testes, utilize o comando:
- npx cypress open

Para executar os testes no modo headless, utilize o comando:
- npx cypress run



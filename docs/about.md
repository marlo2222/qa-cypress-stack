## Stack-web-cypress

A stack wev com cypress realizara toda a configuração do ambiente e estrutura do projeto para realização de testes automatizados.

O projeto de automação criado utilizando essa stack está organizado da seguinte forma: 


```bash
|   cypress.json
|   package.json
|   stk.yaml
\---cypress
    +---integration
    |   \---E2E
    |           home.spec.js
    |
    +---plugins
    |       index.js
    |
    \---support
        |   index.js
        |
        +---commands
        |       homeCommands.js
        |       index.js
        |
        +---locators
        |       homePage.js
        |       index.js
        |
        \---utils
                utils.js
```

### Entradas e inputs solicitados:
- Nome do projeto
- Versão do projeto
- Descrição do projeto
- Autor do projeto
- Licença do projeto
- Base URL.
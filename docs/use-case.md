# Use case

Os passos a seguir demostram o processo de criação de um projeto de automação com utilizando a stack cypress.

Para criar um novo projeto de auromação utilizando a stack, siga os seguintes passos: 

```bash
stk create app <APP-NAME> -t qa-cypress-stack/cypress-template
```

Preencha as informações que são solicitadas.

Estando tudo certo, será gerado seu projeto de automação de testes utilizando cypress, contendo todas as informação descritas do projeto.

OBS: As dependências do projeto já serão instaladas durante a criação do projeto.

Para executar seu projeto, primeiramente entre na pasta do projeto criado:
```bash
cd <APP-NAME>
```

E execute o comando:
```bash
npm run cy:open:dev
```

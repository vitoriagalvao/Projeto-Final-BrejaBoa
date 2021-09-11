### Projeto Final

## Bem vinda ao BrejaBoa
![Alt Text](https://acegif.com/wp-content/gif/beer-77.gif)

No delivery da Cervejaria BrejaBoa é possivel observar os itens disponiveis, precificação e ainda conhecer sobre a história de cada cerveja antes que ela chegue na sua casa, tudo isso nessa API, tá esperando o quê? Vem ver! <br />

### Demandas de negocio
- listar todas as cervejas <br />
- listar todas as histórias <br />

- cadastrar uma nova cerveja no cardapio<br />
- cadastrar uma nova história e vincular ao novo item <br />

- editar o valor de qualquer cerveja <br />

- deletar uma cerveja do cardapio <br />
- deletar a história vinculada a cerveja <br />

### Para o futuro<br />
![Alt Text](https://acegif.com/wp-content/gif/beer-2151.gif)

- listar cervejas que combinam com o alimento que foi requisitado <br />
- Listar um campo de avaliação para as harmonizações sugeridas <br />
- Listar um ranking com as melhores harmonizações de acordo com as avaliações <br />



### Arquitetura usada na API <br />
...

 📁 Comunica
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 beerController.js
   |         |- 📄 historyControllers.js
   |   
   |
   |    |- 📁 models
   |         |- 📄 beer.js
   |         |- 📄 history.js
   |      
   |
   |    |- 📁 routes
   |         |- 📄 beer.js 
   |         |- 📄 history.router.js
   |  
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 procfile
   |- 📄 server.js

   ....
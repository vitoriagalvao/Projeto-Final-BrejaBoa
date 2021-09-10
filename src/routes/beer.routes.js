const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')

router.get('/oi', (req, res) => {
res.status(200).send({"Mensagem": "oi, tô aqui"})

})

//rota que mostra todas as cervejas do cardapio
router.get('/', controller.getAll)

//Rota que recebe um novo item, adiciona ele a lista do cardapio
router.post('/newbeer/create', controller.createBeer)

//Rota que edita o valor do item na lista.
router.patch('/updateValue/:id', controller.updateBeer)

//Rota que atualiza a cerveja no catalogo.
//router.put('/update/:id/', controller.update)

//Rota que retorna o tipo da cerveja e mais detalhes sobre a fabricação, fazendo a requisição pelo id.
//router.get('/beer/:id', controller.getallId)

//Rota que deleta um item da lista, baseado em seu id.
//router.delete('/:id', controller. deleteBeer)

module.exports = router
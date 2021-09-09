const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')


router.get('/beer/all', controller.getAll)

//Rota que recebe um novo item, adiciona ele a lista do cardapio
router.post('/newbeer/create', controller.createBeer)

//Rota que retorna o tipo da cerveja e mais detalhes sobre a fabricação, fazendo a requisição pelo id.
//router.get('/beer/:id', controller.getallId)

//Rota que edita a marca do item na lista.
router.patch('/updateName/:id', controller.updateBeer)

//Rota que atualiza a cerveja no catalogo.
//router.put('/update/:id/', controller.update)

//Rota que deleta um item da lista, baseado em seu id.
//router.delete('/:id', controller. deleteBeer)

module.exports = router
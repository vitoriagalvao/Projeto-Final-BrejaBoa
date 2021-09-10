const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')

router.get('/oi', (req, res) => {
res.status(200).send({"Mensagem": "oi, tô aqui"})

})

//rota que mostra todas as cervejas do cardapio OK
router.get('/', controller.getAll)

//Rota que retorna o tipo da cerveja e mais detalhes sobre a fabricação, fazendo a requisição pelo id.
router.get('/:id', controller.byIdBeer)

//Rota que mostra a cerveja de acordo com a comida requerida
//router.get('/comida', controller.byFood)

//Rota que recebe um novo item, adiciona ele a lista do cardapio OK
router.post('/newbeer/create', controller.createBeer)

//Rota que edita o valor do item na lista OK
router.patch('/updateValue/:id', controller.updateBeer)

//Rota que deleta um item da lista, baseado em seu id.
router.delete('/delete/:id', controller. deleteBeer)







module.exports = router
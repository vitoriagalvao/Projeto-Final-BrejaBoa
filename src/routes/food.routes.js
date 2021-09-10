const express = require('express')
const router = express.Router()
const controllers = require('../controllers/foodControllers')


//rota que mostra todas as comidas de combinações do cardapio O
router.get('/', controllers.getAllFood)

//Rota que mostra a cerveja de acordo com a comida requerida
router.get('/comida', controllers.byFood)

//Rota que recebe um novo item, adiciona ele a lista do cardapio OK
router.post('/newfood/create', controllers.createFood)

module.exports = router
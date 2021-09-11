const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')

router.get('/oi', (req, res) => {
res.status(200).send({"Mensagem": "oi, tô aqui"})

})


router.get('/', controller.getAll)


router.get('/:id', controller.byIdBeer)


router.post('/newbeer/create', controller.createBeer)


router.patch('/updateValue/:id', controller.updateBeer)


router.delete('/delete/:id', controller. deleteBeer)







module.exports = router
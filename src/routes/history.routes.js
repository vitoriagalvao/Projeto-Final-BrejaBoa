const express = require('express')
const router = express.Router()
const controllers = require('../controllers/historyControllers')


router.get('/', controllers.getAll)



router.post('/create', controllers.createHistory)

router.delete('/delete/:id', controllers.deleteHistory)



module.exports = router
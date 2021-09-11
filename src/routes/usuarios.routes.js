const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController');

router.post('/create', controller.createUser);

router.post('/login', controller.login);

module.exports = router;
const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  idade: {type: Number, required: true},
})

module.exports = mongoose.model('usuarios', usuariosSchema);
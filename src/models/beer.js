const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  
})

module.exports = mongoose.model('beer', beerSchema)
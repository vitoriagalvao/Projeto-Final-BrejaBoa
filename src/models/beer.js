const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  harmonizing: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  alcoholcontent: {
    type: String, 
    required: true
  },
  IBU: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  allergens: {
    type: String,
    required: true
  },
  valuebeer: {
    type: String,
    required: true
  },
 size: {
    type: String,
    required: true
  },
   
})

module.exports = mongoose.model('beer', beerSchema)
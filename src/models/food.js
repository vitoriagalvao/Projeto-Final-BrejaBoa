const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    ref: 'beer'
 },
 
  name: {
    type: String,
    required: true,
    ref: 'beer'
  },
 
  name: {
    type: String,
    required: true,
    ref: 'beer'
 
  },
 
  name: {
    type: String,
    required: true,
    ref: 'beer'
  }

})

module.exports = mongoose.model('food', foodSchema)
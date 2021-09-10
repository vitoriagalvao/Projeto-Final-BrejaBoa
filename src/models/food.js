const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    ref: 'beer'
 },
 _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    ref: 'beer'
  },
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    ref: 'beer'
 
  },
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    ref: 'beer'
  }

})

module.exports = mongoose.model('food', foodSchema)
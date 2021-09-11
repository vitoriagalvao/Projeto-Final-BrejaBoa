const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    
 },
 
  year: {
    type: String,
    required: true,
   
  },
 
  history: {
    type: String,
    required: true,
    
 
  },


  
 
})

module.exports = mongoose.model('history', historySchema)
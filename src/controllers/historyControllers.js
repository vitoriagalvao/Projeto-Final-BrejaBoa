const mongoose = require('mongoose')
const History = require('../models/history')
   
const getAll = async (req, res) => {
    const historyAll = await History.find()
    res.json(historyAll)
}

const createHistory = async (req, res) => {
    const history = new History({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      year: req.body.year,
      history: req.body.history
     
  })
    const historyJaExiste = await History.findOne({name: req.body.name})
    if (historyJaExiste) {
      return res.status(409).json({error: 'História já descrita'})
    }
    try{
      const newHistory = await history.save()
      res.status(201).json(newHistory)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }

  const deleteHistory = async (req, res) => {
    try{
        const delHistory = await History.findById(req.params.id)
        if(delHistory == null){
            return res.status(404).json({message: "ID não encontrado"})
        }

        delHistory.remove()
        res.status(200).json({message: "História apagada"}) 

    } catch (err){
        res.status(500).json({message: message.err})
    }   
}



  module.exports = {
      getAll,
      createHistory,
      deleteHistory
  }

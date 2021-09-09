const mongoose = require('mongoose')
const Beer = require('../models/beer')

const getAll = async (req, res) => {
  const beers = await Beer.find()
  res.json(beers)
}

const createBeer = async (req, res) => {
  const beer = new Beer({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
  const beerJaExiste = await Beer.findOne({nome: req.body.nome})
  if (beerJaExiste) {
    return res.status(409).json({error: 'Cerveja já cadastrada.'})
  }
  try{
    const newBeer = await beer.save()
    res.status(201).json(newBeer)
  } catch(err) {
    res.status(400).json({ message: err.message})
  }
}

const updateBeer = async(req, res) => {
  
  try {

    const beer = await Beer.findById(req.params.id)
    
    if (beer == null) {
      return res.status(404).json({message: "cerveja não encontrada"})
    }
   
    if (req.body.nome != null) {
     beer.nome = req.body.nome
    }
   
    const beerAtualizado = await beer.save()
    
    res.status(200).json(beerAtualizado)

  } catch (err) {
  
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAll,
 createBeer,
  updateBeer
}
const mongoose = require('mongoose')
const Beer = require('../models/beer')

const getAll = async (req, res) => {
  const beers = await Beer.find()
  res.json(beers)
}

const createBeer = async (req, res) => {
  const beer = new Beer({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    harmonizing: req.body.harmonizing,
    type: req.body.type,
    alcoholcontent: req.body.alcoholcontent,
    IBU:req.body.IBU,
    ingredients: req.body.ingredients,
    allergens: req.body.allergens,
    valuebeer: req.body.valuebeer,
    size: req.body.size,


 
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
   
    if (req.body.valuebeer != null) {
     beer.valuebeer = req.body.valuebeer
    }
   
    const beerUpdate = await beer.save()
    
    res.status(200).json(beerUpdate)

  } catch (err) {
  
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAll,
 createBeer,
  updateBeer
}
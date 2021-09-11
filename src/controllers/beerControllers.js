const mongoose = require('mongoose')
const beer = require('../models/beer')
const Beer = require('../models/beer')
const Food = require('../models/food')

const getAll = async (req, res) => {
  const beers = await Beer.find()
  res.json(beers)
}


const foodId = async(req, res) =>{

  try {
const requestIdBeer = req.params.harmonizing
    const foodPar= await Beer.findOne({ _id: requestIdBeer })
    const foodRequested= await Food.find({ name: foodPar.harmonizing})

    res.status(200).send({'Food': foodRequested})
    } 

   

catch (err) {
  res.status(500).json({message: err.message})
}

}

const byIdBeer = async(req, res) => {
  
  try {

    const idBeer = await Beer.findById(req.params.id)
    
    if (idBeer == null) {
      return res.status(404).json({message: "ID não encontrado"})
    }
   
    res.json(idBeer)
    

  } catch (err) {
  
    res.status(500).json({message: err.message})
  }

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
  const beerJaExiste = await Beer.findOne({name: req.body.name})
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
  
   const deleteBeer = async (req, res) => {
    try{
        const ber = await Beer.findById(req.params.id)
        if(ber == null){
            return res.status(404).json({message: "ID não encontrada"})
        }

        ber.remove()
        res.status(200).json({message: "Cerveja deletada."}) 

    } catch (err){
        res.status(500).json({message: message.err})
    }   
}



module.exports = {
  getAll,
 createBeer,
  updateBeer,
  deleteBeer,
  byIdBeer,
  foodId
  }

   

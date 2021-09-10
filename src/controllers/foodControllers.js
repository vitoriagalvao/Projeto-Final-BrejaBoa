const mongoose = require('mongoose')
const foodBeer = require('../models/food')

const getAllFood = async (req, res) => {
  const foods = await foodBeer.find()
  res.json(foods)
}

const byFood = async (request, res) => {
  const beerFood = await foodBeer.find().populate('Beer')
  res.status(200).json(beerFood)
}

const createFood = async (req, res) => {
    const foods = new foodBeer({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,

  })
    const foodJaExiste = await foodBeer.findOne({name: req.body.name})
    if (foodJaExiste) {
      return res.status(409).json({error: 'Comida já cadastrada.'})
    }
    try{
      const newfood = await foods.save()
      res.status(201).json(newfood)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }






  module.exports = {
    getAllFood, 
    byFood,
    createFood
    }
   
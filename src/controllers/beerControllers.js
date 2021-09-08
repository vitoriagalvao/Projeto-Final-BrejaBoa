const mongoose = require('mongoose')
const Estudio = require('PROJETO_FINAL_REPROGRAMA/src/models/beer')

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
    //Tenta encontrar um estudio pelo id
    const beer = await Beer.findById(req.params.id)
    //Se você não encontrar me retorne o erro
    if (beer == null) {
      return res.status(404).json({message: "estudio não encontrado"})
    }
    //No corpo da requisição tem algo digitado, considere o que tiver digitado como minha alteração
    if (req.body.nome != null) {
     beer.nome = req.body.nome
    }
    //Já salvou?
    const beerAtualizado = await beer.save()
    //Retornando o documento atualizado com o código de sucesso
    res.status(200).json(beerAtualizado)

  } catch (err) {
    //Se houve qulquer erro acima, mostre qual erro foi esse 
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAll,
 createBeer,
  updateBeer
}
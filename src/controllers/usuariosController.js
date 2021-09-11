const mongoose = require('mongoose')
const Usuaria = require('../models/usuarios')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

const createUser  = async (req, res) => {
    const user = new Usuaria({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email.email,
      senha:req.body.senha,
      idade: req.body.idade
      
  })
    const userJaExiste = await Usuaria.findOne({name: req.body.name})
    if (userJaExiste) {
      return res.status(409).json({error: 'Usuário já existe'})
    }
    try{
      const newUser = await history.save()
      res.status(201).json(newUser)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }


Usuaria.findOne({idade: req.body.idade}, (err, usuariaEncontrada)=>{
   
    if(Usuaria.idade >18 ){
      if (!usuariaEncontrada) {
        return res.status(404).send({ message: 'Usuária não encontrada', email: `${req.body.email}`})
      }
  
      const senhaValida = bcrypt.compareSync(req.body.senha, usuariaEncontrada.senha)
  
      if (!senhaValida) {
        return res.status(401).send({message: "Login não autorizado"})
      }
  
      const token = jwt.sign({email: req.body.email}, SECRET)
      res.status(200).send({ messagem: "Login realizado com sucesso", token: token})  
    } else {
      res.status(500).json({message: "não autorizdo"})
    }
  })


const login = (req, res) => {
  Usuaria.findOne({ email: req.body.email }, (err, usuariaEncontrada) => {
    if (!usuariaEncontrada) {
      return res.status(404).send({ message: 'Usuária não encontrada', email: `${req.body.email}`})
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, usuariaEncontrada.senha)

    if (!senhaValida) {
      return res.status(401).send({message: "Login não autorizado"})
    }

    const token = jwt.sign({email: req.body.email}, SECRET)
    res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
})
}

module.exports = { createUser, login }
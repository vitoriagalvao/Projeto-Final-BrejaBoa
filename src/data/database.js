require('dotenv').config()
const mongoose = require('mongoose')

const MONGO = process.env.MONGODB_URL = "mongodb://localhost:27017/Beer-db" || process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectada no MongoDb Atlas")
    })
    .catch((error)=>{
        console.log("Algo deu errado :/ ")
        console.error(error)
    })
}

module.exports = { connect }


require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/Beer-db" 

const connect = () => {
    mongoose.connect(MONGO_URL, {
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


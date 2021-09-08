const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())



const db = require('./data/database')
const router = require("./routes/beer.routes")
db.connect()

router.get('/oi', (req, res) => {
res.status(200).send({"Mensagem": "oi, tô aqui"})

})




module.exports = app
const express = require("express")
const app = express()
const cors = require("cors")
const beerRoutes = require("./routes/beer.routes")


app.use(cors())
app.use(express.json())

const db = require('./data/database')
db.connect()

app.use("/beer", beerRoutes)




//router.get('/oi', (req, res) => {
//res.status(200).send({"Mensagem": "oi, tô aqui"})

//})




module.exports = app
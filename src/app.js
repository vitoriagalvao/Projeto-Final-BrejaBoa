const express = require("express")
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json())

const db = require('./data/database')
db.connect()

const beerRoutes = require("./routes/beer.routes")
app.use("/beer", beerRoutes)









module.exports = app
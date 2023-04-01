const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');
const bodyParser = require("body-parser")
const route=require('./Routes/router')
const db=require('./Models/db')

app.use(cors());
db.connect()
app.use(bodyParser.urlencoded(
  { extended: false }
))
app.use(express.json())
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
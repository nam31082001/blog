const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');
const  bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.urlencoded(
  {extended:false}
))
app.use(express.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
  })
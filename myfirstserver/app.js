const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'index.html')
})

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'style.css')
})

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'bild.jpg')
})



app.listen(port, () => console.log(`Example app listening on port port!`))
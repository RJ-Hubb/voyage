const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/test', function (req, res) {
    res.json({test:"hello world"})
  })
 
app.listen(3000)
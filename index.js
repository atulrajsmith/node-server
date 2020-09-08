const express = require('express')
const app = express()
const port = 3000
var birds = require('./birds')

const title= 'atul'
console.dir(__dirname)

app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
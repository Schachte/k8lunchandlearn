const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    res.send(add)
  })
})

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})


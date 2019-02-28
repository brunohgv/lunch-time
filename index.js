const express = require('express')

const PORT = 8080

var app = express()

app.listen(PORT, () => {
  console.log(`runnig on port ${PORT}`)
})
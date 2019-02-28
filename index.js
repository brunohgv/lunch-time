const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8600

var app = express()

app.listen(PORT, () => {
  console.log(`runnig on port ${PORT}`)
})
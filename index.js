const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
require('dotenv').config()

const PORT = process.env.PORT || 8600

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  socket.on('lunchtime', () => {
    socket.broadcast.emit('lunchtime')
  })
})

http.listen(PORT, () => {
  console.log(`runnig on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Server Running')
})

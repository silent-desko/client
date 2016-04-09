const socket = io('http://localhost:5050')

socket.on('notice', function (data) {
  console.log(data)
  socket.emit('chat', { message: 'lol' })
})

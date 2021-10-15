const express = require('express');
const io = require('socket.io');
const cors = require('cors');
const { Server } = require('http');

const app = express();
const server = Server(app);
const socket = io(server);

let userCount = 1;

socket.on('connection', (socket) => {
  console.log('Servidor conectado');

  // socket.handshake.query.token.id;

  // socket.join(socket.handshake.query.token.userID);
  socket.join('user' + userCount);
  socket.join('global');

  userCount++;
});

app.use(cors());

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.get('/message', (req, res) => {
  const messageId = String(Math.random());

  socket.to('user1').emit('message', {
    id: messageId,
    text: `O id dessa mensagem é: ${messageId}`,
  });

  return res.json();
});

server.listen(3333, () => {
  console.log('Server on 🔥');
});

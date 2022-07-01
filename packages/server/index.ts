import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3030;
const clientPublicPath = path.join(process.cwd(), '../client/build')

const app = express()
  .use(express.static(clientPublicPath))

const httpServer = http.createServer(app)
const io = new Server(httpServer)

io.on('connection', function (socket) {
  console.log("Connected succesfully to the socket ...");

  var news = [
      { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
      { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
      { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
      { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
  ];

  // Send news on the socket
  socket.emit('news', news);

  socket.on('my other event', function (data) {
      console.log(data);
  });
});

httpServer.listen(PORT, () => console.log(`Listening on ${PORT}`));

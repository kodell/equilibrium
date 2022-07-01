import express from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import { SineData } from './sineData';

const PORT = process.env.PORT || 3030;
const origin = ['http://localhost:3000', 'https://equilibrium-challenge.herokuapp.com']
const clientPublicPath = path.join(process.cwd(), '../client/build')

const app = express()
  .use(cors({
    origin,
  }))
  .use(express.static(clientPublicPath))

const httpServer = http.createServer(app)
const io = new Server(httpServer, { cors: { origin }})

io.on('connection', function (socket) {
  let sineData: SineData | null = new SineData()

  socket.emit('sine', { coordinates: sineData.coordinates })
  const interval = setInterval(() => {
    if (sineData) {
      socket.emit('sine', { coordinates: sineData.addCoordinate() })
    }
  }, 1000)

  socket.on('disconnect', () => {
    clearInterval(interval)
    sineData = null
    console.log('Socket disconnect', { id: socket.id })
  })
});

httpServer.listen(PORT, () => console.log(`Listening on ${PORT}`));

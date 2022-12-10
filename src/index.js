'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    // const express = require('express')
    // const app = express();
    // const http = require('http');
    // const expressServer = http.createServer(app);

    // const {Server} = require('socket.io');
    // const io = new Server(expressServer);

    // io.on('connection', (socket) => {
    //   console.log('New User Connected');
      
    //   socket.on('disconnect', () => {
        
    //     console.log('New User Disconnect');
    //   })
    // })


    const io = require('socket.io')(strapi.server.httpServer, {
      path: '/api/socket/v1',
      cors: {origin: "*", methods: ['GET', 'POST', 'PUT', 'DELETE']},
      credential: true
    })

    strapi.io = io

    io.on('connection', (socket) => {
      console.log('Socket.io Connected');


      socket.on('send-message', (data) => {
        console.log(data, 'data');
        io.emit('get-message', data);
      })

      socket.on('disconnect', () => {
        console.log('Socket.io Disconnect');
      })
    })
  },
};

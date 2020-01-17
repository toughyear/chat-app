//requirements
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;

// create a app that has express functionalities
const app = express();

//The http.createServer() method creates an HTTP Server object.
const server = http.createServer(app);

// socket for our app to communicate via the server
const io = socketio(server);

//start server
server.listen(PORT, () => console.log(`server has started on port: ${PORT}`));

//try

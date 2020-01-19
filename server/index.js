//requirements
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;

const router = require("./router");
// create a app that has express functionalities
const app = express();

//The http.createServer() method creates an HTTP Server object.
const server = http.createServer(app);

// socket for our app to communicate via the server
const io = socketio(server);

// io will now handle all connections between serverside of app and client side of app.
// here the io is server side. It has some built-in methods like connection and disconnect.abs

io.on("connection", socket => {
  console.log(`A new user has connected with ID = ${socket.id.substr(0, 5)}`);

  socket.on("join", ({ name, room }, callback) => {
    console.log("User:", name, "Room:", room);

    //call back function ... you can name it anything
  });
  // now connection has established between client-socket and server.
  // we can call special methods on the client socket we just connected to.
  socket.on("disconnect", () => {
    console.log("user left!");
  });
});
app.use(router);
//start server
server.listen(PORT, () => console.log(`server has started on port: ${PORT}`));

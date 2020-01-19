import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

//empty variable
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    //called once when component mounts
    const { name, room } = queryString.parse(location.search);

    //create a socket for client
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    //create custom events with client side socket

    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  return <h1>CHAT</h1>;
};

export default Chat;

import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    {/* you can send message with pressing enter or by clicking button */}
    <button className="sendButton" onClick={event => sendMessage(event)}>
      Send
    </button>
  </form>
);
export default Input;

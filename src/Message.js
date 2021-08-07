import React from "react";
import "./Message.css";
function Message({ details }) {
  return (
    <div className="chat-message">
      <img className="chat-message-userimage" src={details.userimage} alt="" />
      <div className="message-info">
        <h4>
          {details.user}
          <span className="message-timestamp">
            {new Date(details.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{details.message}</p>
      </div>
    </div>
  );
}

export default Message;

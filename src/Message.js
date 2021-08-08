import React from "react";
import "./Message.css";
function Message({ details }) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="chat-message">
      <img className="chat-message-userimage" src={details.userimage} alt="" />
      <div className="message-info">
        <h4>
          {details.user}
          <span className="message-timestamp">
            {details.timestamp &&
              new Date(details.timestamp?.toDate()).toLocaleTimeString(
                "en-US",
                options
              )}
          </span>
        </h4>
        <p>{details.message}</p>
      </div>
    </div>
  );
}

export default Message;

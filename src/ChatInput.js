import React, { useState } from "react";
import "./ChatInput.css";
import Button from "@material-ui/core/Button";
import db from "./firebase";
import { useStateValue } from "./stateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    if (input) {
      e.preventDefault(); //so it does not refresh the page
      if (channelId) {
        //channelId
        db.collection("rooms").doc(channelId).collection("messages").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user?.displayName,
          userimage: user?.photoURL,
        });
      }
      setInput("");
    }
  };
  return (
    <div className="chat-input">
      <form>
        <input
          /*to store input for database*/
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;

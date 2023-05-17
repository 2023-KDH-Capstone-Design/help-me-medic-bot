import React, { useState, useRef, useEffect } from "react";
import * as SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

import { BsSend } from "react-icons/bs";

const ChatForm = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const stompClient = useRef();
  const chatInputRef = useRef();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");

    stompClient.current = StompJs.Stomp.over(socket);
    stompClient.current.connect({}, () => {
      setIsConnected(true);
      stompClient.current.subscribe("/topic/public", (message) => {
        props.onUpdate("res", message.body);
      });
    });
  }, []);

  const sendMessage = (message) => {
    stompClient.current.send("/app/sendMessage", {}, JSON.stringify(message));
    props.onUpdate("req", message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(chatInputRef.current.value);
    chatInputRef.current.value = "";
  };

  return (
    <form
      className="sticky bottom-0 p-4 msger-inputarea bg-gradient-to-t from-base-300 via-base-300"
      onSubmit={handleSubmit}
    >
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder={
              isConnected ? "Type here" : "Cannot connect to server."
            }
            className="input input-bordered w-full"
            ref={chatInputRef}
            disabled={!isConnected}
          />
          <button type="submit" className="btn" disabled={!isConnected}>
            <BsSend size="16px" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;

import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";
import * as SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

import ChatLog from "../components/chat/ChatLog";
import ChatForm from "../components/chat/ChatForm";

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const stompClient = useRef();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    stompClient.current = StompJs.Stomp.over(socket);
    stompClient.current.connect({}, (frame) => {
      stompClient.current.subscribe("/topic/public", (message) => {
        showMessage("res", message.body);
      });
    });
  }, []);

  const sendMessage = (message) => {
    showMessage("req", message);
    stompClient.current.send("/app/sendMessage", {}, JSON.stringify(message));
  };

  const showMessage = (type, message) => {
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { id: type + Math.random(), type: type, value: message },
    ]);
  };

  $(() => {
    $("form").on("submit", (e) => {
      e.preventDefault();
    });
  });

  return (
    <section className="msger w-full mx-auto flex flex-col gap-8">
      <ChatLog log={chatLog} />
      <ChatForm onSend={sendMessage} />
    </section>
  );
};

export default Chat;

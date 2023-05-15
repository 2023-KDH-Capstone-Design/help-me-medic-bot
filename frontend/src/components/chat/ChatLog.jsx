import React, { useRef, useEffect } from "react";

import ReqChatBubble from "./ReqChatBubble";
import ResChatBubble from "./ResChatBubble";
// import ModalToggle from "../modal/ModalToggle";
import "../../styles/ChatLog.css";

const ChatLog = (props) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.log]);

  return (
    <main className="msger-chat">
      {props.log.map((chat) => {
        if (chat.type === "req") {
          return <ReqChatBubble key={chat.id} message={chat.value} />;
        } else {
          return <ResChatBubble key={chat.id} message={chat.value} />;
        }
      })}
      <div className="flex flex-col items-start gap-1 ml-14">
        <ModalToggle label="서울 아산 병원" />
        <ModalToggle label="세브란스 병원" />
        <ModalToggle label="서울대 병원" />
<<<<<<< HEAD
      </div>
=======
      </div> */}
      <div ref={messageEndRef}></div>
>>>>>>> 0546d109a34ebddfd83d8cd5f13c99d1bc70957a
    </main>
  );
};
export default ChatLog;

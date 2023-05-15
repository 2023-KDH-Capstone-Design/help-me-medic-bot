import React from "react";

import ReqChatBubble from "./ReqChatBubble";
import ResChatBubble from "./ResChatBubble";
import ModalToggle from "../modal/ModalToggle";

const ChatLog = (props) => {
  return (
    <main className="msger-chat" style={{ minHeight: "calc(100vh - 200px)" }}>
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
      </div>
    </main>
  );
};
export default ChatLog;

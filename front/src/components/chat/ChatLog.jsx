import React from "react";

import ReqChatBubble from "./ReqChatBubble";
import ResChatBubble from "./ResChatBubble";
import Modal from "../modal/Modal";

const ChatLog = () => {
  return (
    <main className="msger-chat" style={{ minHeight: "calc(100vh - 200px)" }}>
      <ReqChatBubble />
      <ResChatBubble />
      <div className="flex flex-col items-start gap-1 ml-14">
        <Modal label="서울 아산 병원" />
        <Modal label="세브란스 병원" />
        <Modal label="서울대 병원" />
      </div>
    </main>
  );
};
export default ChatLog;

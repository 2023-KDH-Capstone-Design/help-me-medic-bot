import React from "react";

import ReqChatBubble from "./ReqChatBubble";
import ResChatBubble from "./ResChatBubble";

const ChatLog = () => {
  return (
    <main className="msger-chat" style={{ minHeight: "calc(100vh - 200px)" }}>
      <ReqChatBubble />
      <ResChatBubble />
    </main>
  );
};
export default ChatLog;

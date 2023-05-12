import React from "react";

import ChatLog from "../components/chat/ChatLog";
import ChatForm from "../components/chat/ChatForm";

const Chat = () => {
  return (
    <section className="msger w-full mx-auto flex flex-col gap-8">
      <ChatLog />
      <ChatForm />
    </section>
  );
};

export default Chat;

import React from "react";

import ChatLog from "../components/chat/ChatLog";
import ChatForm from "../components/chat/ChatForm";
import Modal from "../components/modal/Modal";

const Chat = () => {
  return (
    <section className="msger w-full mx-auto flex flex-col gap-8">
      <ChatLog />
      <div className="flex mx-3">
        <Modal />
      </div>
      <ChatForm />
    </section>
  );
};

export default Chat;

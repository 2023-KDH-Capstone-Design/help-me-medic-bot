import React from "react";

import ChatLog from "../components/chat/ChatLog";
import ChatForm from "../components/chat/ChatForm";
import Modal from "../components/modal/Modal";

const Chat = () => {
  return (
    <section className="msger w-full mx-auto flex flex-col gap-8">
      <ChatLog />
      <div className="flex justify-start grid grid-rows-3 gap-4 mx-5">
        <Modal label="서울 아산 병원" />
        <Modal label="세브란스 병원" />
        <Modal label="서울대 병원" />
      </div>
      <ChatForm />
    </section>
  );
};

export default Chat;

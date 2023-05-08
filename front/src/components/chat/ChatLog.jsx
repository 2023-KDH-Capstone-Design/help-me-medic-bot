import React, { useState } from "react";

import KakaoMap from "../modal/KakaoMap";
import Modal from "../modal/Modal";
import ReqChatBubble from "./ReqChatBubble";
import ResChatBubble from "./ResChatBubble";
import ModalToggle from "../modal/ModalToggle";

const ChatLog = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const modalToggleHandler = (label) => {
    setSelectedModal(label);
  };

  const closeModalHandler = () => {
    setSelectedModal(null);
  };

  return (
    <main className="msger-chat" style={{ minHeight: "calc(100vh - 200px)" }}>
      <ReqChatBubble />
      <ResChatBubble />
      <div className="flex flex-col items-start gap-1 ml-14">
        <ModalToggle label="서울 아산 병원" onToggle={modalToggleHandler} />
        <ModalToggle label="세브란스 병원" onToggle={modalToggleHandler} />
        <ModalToggle label="서울대 병원" onToggle={modalToggleHandler} />
      </div>
      {selectedModal && (
        <Modal label={selectedModal} onClose={closeModalHandler}>
          <KakaoMap />
        </Modal>
      )}
    </main>
  );
};
export default ChatLog;

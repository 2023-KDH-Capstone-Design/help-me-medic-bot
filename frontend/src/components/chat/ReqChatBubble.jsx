import React from "react";

import profileImage from "../../assets/images/dog.jpg";

const ReqChatBubble = () => {
  return (
    <div className="chat chat-end mr-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profileImage} alt="face" />
        </div>
      </div>
      <div className="chat-bubble">저는 조붕딱입미다.</div>
    </div>
  );
};

export default ReqChatBubble;

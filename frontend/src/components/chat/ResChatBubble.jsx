import React from "react";

import profileImage from "../../assets/images/kimdamae.jpg";

const ResChatBubble = ({ message }) => {
  return (
    <div className="chat chat-start ml-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profileImage} alt="face" />
        </div>
      </div>
      <div className="chat-bubble">{message}</div>
    </div>
  );
};

export default ResChatBubble;

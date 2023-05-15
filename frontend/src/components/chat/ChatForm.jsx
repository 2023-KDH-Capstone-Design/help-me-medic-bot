import React, { useRef } from "react";

import { BsSend } from "react-icons/bs";

const ChatForm = (props) => {
  const chatInputRef = useRef();

  const handleSubmit = () => {
    props.onSend(chatInputRef.current.value);
    chatInputRef.current.value = "";
  };

  return (
    <form
      className="sticky bottom-0 p-4 msger-inputarea bg-gradient-to-t from-base-300 via-base-300"
      onSubmit={handleSubmit}
    >
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            ref={chatInputRef}
          />
          <button type="submit" className="btn">
            <BsSend size="16px" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;

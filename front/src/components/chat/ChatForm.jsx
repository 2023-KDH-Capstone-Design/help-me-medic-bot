import React from "react";

const ChatForm = () => {
  return (
    <form className="sticky bottom-0 p-4 msger-inputarea bg-base-300">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button className="btn btn-info">Send</button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;

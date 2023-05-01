import React from "react";

const ChatForm = () => {
  return (
    <form className="fixed bottom-6 msger-inputarea">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
          <button className="btn btn-info">Send</button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;

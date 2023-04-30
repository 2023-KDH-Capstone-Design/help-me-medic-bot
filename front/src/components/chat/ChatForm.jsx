import React from "react";

const ChatForm = () => {
  return (
    <form class="flex-0 msger-inputarea">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button className="btn btn-outline btn-info">Send</button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;

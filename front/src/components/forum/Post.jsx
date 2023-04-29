import React from "react";

import { BsSend } from "react-icons/bs";

const Post = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="w-8 rounded">
              <img src="dog.jpg" alt="" />
            </div>
          </div>
          <p>Name</p>
        </div>
        <p className="my-2 text-lg">어디로 가야하오</p>
        <div className="form-control">
          <div className="input-group input-group-md">
            <input
              type="text"
              placeholder="Comment"
              className="input input-bordered input-md w-full"
            />
            <button className="btn btn-square btn-md">
              <BsSend size="16px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

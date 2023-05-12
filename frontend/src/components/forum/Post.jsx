import React from "react";

import profileImage from "../../assets/images/dog.jpg";
import { IoSend } from "react-icons/io5";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-9 rounded">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <p>Name</p>
        </div>
        <p className="my-2 text-lg">어디로 가야하오</p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Comment"
              className="input input-bordered w-full"
            />
            <button className="btn btn-square">
              <IoSend size="16px" />
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-4">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Post;

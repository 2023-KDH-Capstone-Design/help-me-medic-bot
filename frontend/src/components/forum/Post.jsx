import React from "react";

import profileImage from "../../assets/images/dog.jpg";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Post = ({ id, author, content }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-9 rounded">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <p>{author}</p>
        </div>
        <p className="my-2 text-lg">{content}</p>
        <CommentForm id={id} />
        <div className="flex flex-col mt-2 gap-4">
          <CommentList id={id} />
        </div>
      </div>
    </div>
  );
};

export default Post;

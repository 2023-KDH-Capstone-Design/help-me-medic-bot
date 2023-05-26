import React from "react";

import profileImage from "../../assets/images/kimdamae.jpg";

const Comment = ({ author, content }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className="w-9 rounded">
          <img src={profileImage} alt="face" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="inline-flex text-xs">{author}</span>
        <span className="">{content}</span>
      </div>
    </div>
  );
};

export default Comment;

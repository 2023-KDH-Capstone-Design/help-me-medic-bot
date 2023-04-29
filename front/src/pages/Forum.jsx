import React from "react";

import PostForm from "../components/forum/PostForm";
import Post from "../components/forum/Post";

const Forum = () => {
  return (
    <div className="flex flex-col gap-4">
      <PostForm />
      <Post />
    </div>
  );
};

export default Forum;

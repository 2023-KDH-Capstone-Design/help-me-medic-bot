import React from "react";

import AppBar from "../components/ui/AppBar";
import PostForm from "../components/forum/PostForm";
import Post from "../components/forum/Post";

const Forum = () => {
  return (
    <>
      <AppBar title="Forum" />
      <div
        className="flex flex-col w-full gap-4 p-2"
        style={{ maxWidth: "1024px" }}
      >
        <PostForm />
        <Post />
      </div>
    </>
  );
};

export default Forum;

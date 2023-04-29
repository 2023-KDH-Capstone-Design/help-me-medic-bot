import React from "react";

import AppBar from "../components/ui/AppBar";
import Post from "../components/forum/Post";
import Comment from "../components/forum/Comment";

const Forum = () => {
  return (
    <>
      <AppBar title="Forum" />
      <div
        className="flex flex-col w-full gap-4 p-2"
        style={{ maxWidth: "1024px" }}
      >
        <Post />
        <Comment />
      </div>
    </>
  );
};

export default Forum;

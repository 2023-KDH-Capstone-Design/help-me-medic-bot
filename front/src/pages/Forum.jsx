import React from "react";

import AppBar from "../components/ui/AppBar";
import Post from "../components/forum/Post";
import Comment from "../components/forum/Comment";

const Forum = () => {
  return (
    <>
      <AppBar title="Forum" />
      <div className="flex w-full p-2" style={{ maxWidth: "1024px" }}>
        <Post />
      </div>
      <Comment />
    </>
  );
};

export default Forum;

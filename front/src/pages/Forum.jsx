import React from "react";

import AppBar from "../components/ui/AppBar";
import Post from "../components/forum/Post";

const Forum = () => {
  return (
    <>
      <AppBar title="Forum" />
      <Post />
      <div></div>
    </>
  );
};

export default Forum;

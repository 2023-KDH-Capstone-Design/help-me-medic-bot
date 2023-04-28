import React from "react";

import AppBar from "../components/ui/AppBar";
import Post from "../components/forum/Post";

const Forum = () => {
  return (
    <>
      <AppBar title="Forum" />
      <div className="p-2">
        <Post />
      </div>
    </>
  );
};

export default Forum;

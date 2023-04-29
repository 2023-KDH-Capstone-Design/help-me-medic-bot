import React from "react";

import AppBar from "../components/ui/AppBar";

const Home = () => {
  return (
    <>
      <AppBar title="Home" />
      <div
        className="flex flex-col w-full gap-4 p-2"
        style={{ maxWidth: "1024px" }}
      ></div>
    </>
  );
};

export default Home;

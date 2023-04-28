import React, { useState, useEffect } from "react";
import axios from "axios";

import AppBar from "../components/ui/AppBar";

const Chat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/test/test/")
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AppBar title="Chat" />
      <div className="p-2">
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
};

export default Chat;

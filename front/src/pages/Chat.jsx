import React, { useState, useEffect } from "react";
import axios from "axios";

import CustomAppBar from "../components/ui/CustomAppBar";

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
      <CustomAppBar title="Chat" />
      <div className="p-2">
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
};

export default Chat;

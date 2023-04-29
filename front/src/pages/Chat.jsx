import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatForm from "../components/chat/ChatForm";

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
      <ChatForm />
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Chat;

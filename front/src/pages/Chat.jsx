import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>{JSON.stringify(data)}</Typography>
      </Box>
    </>
  );
};

export default Chat;

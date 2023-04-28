import React from "react";
import { Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import CustomDrawer from "./components/ui/CustomDrawer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Community from "./pages/Community";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Box>
  );
};

export default App;

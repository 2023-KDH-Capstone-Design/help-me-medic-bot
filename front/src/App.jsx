import React from "react";
import { Routes, Route } from "react-router-dom";

import CustomDrawer from "./components/ui/CustomDrawer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Forum from "./pages/Forum";

const App = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
      <CustomDrawer />
    </div>
  );
};

export default App;

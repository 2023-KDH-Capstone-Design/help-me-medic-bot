import React from "react";
import { Routes, Route } from "react-router-dom";

import Drawer from "./components/ui/Drawer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Forum from "./pages/Forum";
import HospInfo from "./pages/HospInfo";

const App = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/hospinfo" element={<HospInfo />} />
        </Routes>
      </div>
      <Drawer />
    </div>
  );
};

export default App;

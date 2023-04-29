import React from "react";
import { Routes, Route } from "react-router-dom";

import AppBar from "./components/ui/AppBar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Forum from "./pages/Forum";
import HospInfo from "./pages/HospInfo";
import Drawer from "./components/ui/Drawer";

const App = () => {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input type="checkbox" id="drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content">
          <AppBar title="title" />
        </div>
        <div className="px-6 xl:pr-2 pb-16">
          <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
            <div className="w-full max-w-4xl flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/hospinfo" element={<HospInfo />} />
              </Routes>
            </div>
            <div>
              <div className="sticky top-20 xl:mt-32 my-6 xl:my-0 xl:w-[130px]">
                <div>광고 1</div>
                <div>광고 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default App;

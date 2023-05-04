import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import AppBar from "../components/ui/AppBar";
import Home from "./Home";
import Chat from "./Chat";
import Forum from "./Forum";
import Advertisement from "../components/ui/Advertisement";
import Drawer from "../components/ui/Drawer";

const pages = [
  { id: 0, path: "/", title: "Home", comp: <Home /> },
  { id: 1, path: "/chat", title: "Chat", comp: <Chat /> },
  { id: 2, path: "/forum", title: "Forum", comp: <Forum /> },
];

const Main = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState();

  useEffect(() => {
    const { title: subTitle } = pages.find((p) => p.path === pathname);
    setTitle(subTitle);
  }, [pathname]);

  return (
    <div className="bg-base-300 drawer drawer-mobile">
      <input type="checkbox" id="drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
          <AppBar title={title} />
        </div>
        <div className="px-6 xl:pr-2 mt-6">
          <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
            <div className="w-full max-w-4xl flex-grow">
              <Routes>
                {pages.map((p) => (
                  <Route key={p.id} path={p.path} element={p.comp} />
                ))}
              </Routes>
            </div>
            <div>
              <div className="sticky top-20 xl:mt-32 my-6 xl:my-0 xl:w-[130px]">
                <Advertisement />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default Main;

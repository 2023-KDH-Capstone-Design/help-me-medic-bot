import React from "react";
import { Link } from "react-router-dom";

import { BsChatDots, BsPeople, BsPlusSquare } from "react-icons/bs";

const Drawer = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <aside className="bg-base-200 w-80">
        <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 flex">
          <Link to="/" className="flex-0 btn btn-ghost px-2">
            MediChat
          </Link>
        </div>
        <div className="h-4"></div>
        <ul className="menu menu-compact flex flex-col p-0 px-4">
          <li>
            <Link to="/chat" className="flex gap-4">
              <span className="flex-none">
                <BsChatDots size="24px" />
              </span>
              <span className="flex-1">Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/forum" className="flex gap-4">
              <span className="flex-none">
                <BsPeople size="24px" />
              </span>
              <span className="flex-1">Forum</span>
            </Link>
          </li>
          <li>
            <Link to="/hospinfo" className="flex gap-4">
              <span className="flex-none">
                <BsPlusSquare size="24px" />
              </span>
              <span className="flex-1">Hospital Information</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;

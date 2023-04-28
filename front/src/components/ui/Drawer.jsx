import React from "react";
import { Link } from "react-router-dom";

import ModeToggleButton from "./ModeToggleButton";

const Drawer = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <ModeToggleButton />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/hospinfo">Hospital Information</Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;

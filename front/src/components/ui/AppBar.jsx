import React from "react";

import { FaBars } from "react-icons/fa";
import ModeToggleButton from "./ModeToggleButton";

const AppBar = (props) => {
  return (
    <div className="navbar w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer" className="btn btn-square btn-ghost">
          <FaBars />
        </label>
      </div>
      <div className="flex-1 px-2 mx-2 text-2xl">{props.title}</div>
      <div className="flex-0">
        <ModeToggleButton />
      </div>
    </div>
  );
};

export default AppBar;

import React from "react";

import { FaBars } from "react-icons/fa";

const AppBar = (props) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <FaBars />
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{props.title}</a>
      </div>
    </div>
  );
};

export default AppBar;

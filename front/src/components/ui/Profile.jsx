import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-3 flex-0">
        <img src="kimdamae.jpg" alt="face" className="w-8 h-8 rounded" />
        <span className="inline-flex">Name</span>
      </div>
      <div className="flex-none dropdown dropdown-top dropdown-end">
        <label tabIndex={5} className="btn btn-outline btn-accent btn-xs m-1">
          menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu menu-compact shadow bg-base-200 rounded-box w-52"
        >
          <li>
            <Link to="/">Help & FAQ</Link>
          </li>
          <div className="h-1"></div>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <div className="h-1"></div>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

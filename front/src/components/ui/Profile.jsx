import React from "react";

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
            <a href="#">Help & FAQ</a>
          </li>
          <div className="my-1.5 h-px bg-black" role="none"></div>
          <li>
            <a href="#">Settings</a>
          </li>
          <div className="my-1.5 h-px bg-black" role="none"></div>
          <li href="#">
            <a>Log out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

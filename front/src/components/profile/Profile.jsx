import React from "react";

const Profile = () => {
  return (
    <li className="flex gap-4">
      <div className="flex-none inline-flex">
        <img src="kimdamae.jpg" alt="face" className="w-8 h-8 rounded" />
        <span className="inline-flex">Name</span>
        <div className="dropdown dropdown-top">
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
            <div class="my-1.5 h-px bg-black" role="none"></div>
            <li>
              <a href="#">Settings</a>
            </li>
            <div class="my-1.5 h-px bg-black" role="none"></div>
            <li href="#">
              <a>Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Profile;

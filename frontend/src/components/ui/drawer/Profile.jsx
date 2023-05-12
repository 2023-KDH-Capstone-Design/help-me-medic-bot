import React from "react";
import { Link, useNavigate } from "react-router-dom";

import profileImage from "../../../assets/images/kimdamae.jpg";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("name");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-3">
        <img src={profileImage} alt="face" className="w-8 h-8 rounded" />
        <span className="inline-flex">{sessionStorage.getItem("name")}</span>
      </div>
      <div className="dropdown dropdown-top dropdown-end">
        <label tabIndex={5} className="btn btn-outline btn-xs m-1">
          menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-base-200 rounded-box w-52"
        >
          <li>
            <Link to="/">Help & FAQ</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <li>
            <div onClick={handleLogOut}>Log out</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

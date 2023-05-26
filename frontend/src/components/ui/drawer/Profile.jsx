import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import profileImage from "../../../assets/images/profile.png";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios.post("http://localhost:8080/logout").then(() => {
      sessionStorage.removeItem("user_id");
      sessionStorage.removeItem("name");
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-3">
        <img src={profileImage} alt="face" className="w-8 h-8 rounded" />
        <span className="inline-flex">{sessionStorage.getItem("name")}</span>
      </div>
      <div className="dropdown dropdown-top dropdown-end">
        <label className="btn btn-outline btn-xs m-1" onClick={handleLogOut}>
          {t("logout")}
        </label>
      </div>
    </div>
  );
};

export default Profile;

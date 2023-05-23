import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BsChatDots, BsPeople } from "react-icons/bs";
import Image from "../assets/images/main_banner.jpg";

const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const clickHandler = (path) => {
    navigation(path);
  };
  return (
    <>
      <img src={Image} alt="chatbot" className="w-full object-contain" />
      <div className="grid md:grid-cols-2 gap-2 flex justify-center mt-8">
        <div
          className="flex inline-flex btn btn-warning rounded-lg lg:h-32 h-24 md:w-auto w-96"
          onClick={() => clickHandler("/chat")}
        >
          <div className="flex gap-4">
            <BsChatDots size="40px" />
            <span className="text-4xl">{t("chat")}</span>
          </div>
        </div>
        <div
          className="flex inline-flex btn btn-success rounded-lg lg:h-32 h-24 md:w-auto w-96"
          onClick={() => clickHandler("/forum")}
        >
          <div className="flex gap-4">
            <BsPeople size="40px" />
            <span className="text-4xl">{t("forum")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

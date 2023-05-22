import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BsChatDots, BsPeople } from "react-icons/bs";
import Image from "../assets/images/ai.jpg";

const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const clickHandler = (path) => {
    navigation(path);
  };
  return (
    <div>
      <div className="flex justify-center border-solid border-2 border-black rounded-lg h-56 xl:h-96 mb-5">
        <img src={Image} alt="chatbot" className="w-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-2 flex justify-center">
        <div
          className="flex inline-flex btn btn-outline rounded-lg lg:h-32 h-24 md:w-auto w-96"
          onClick={() => clickHandler("/chat")}
        >
          <div className="flex gap-4">
            <BsChatDots size="40px" />
            <span className="text-4xl">{t("chat")}</span>
          </div>
        </div>
        <div
          className="flex inline-flex btn btn-outline rounded-lg lg:h-32 h-24 md:w-auto w-96"
          onClick={() => clickHandler("/forum")}
        >
          <div className="flex gap-4">
            <BsPeople size="40px" />
            <span className="text-4xl">{t("forum")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BsChatDots, BsPeople } from "react-icons/bs";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center border-solid border-2 border-black rounded-lg h-56 xl:h-96 mb-5">
        광고2
      </div>
      <div className="grid md:grid-cols-2 gap-2 flex justify-center">
        <div className="flex inline-flex btn btn-outline rounded-lg lg:h-32 h-24 lg:w-auto w-96">
          <Link to="/chat" className="flex gap-4">
            <BsChatDots size="40px" />
            <span className="text-4xl">{t("chat")}</span>
          </Link>
        </div>
        <div className="flex inline-flex btn btn-outline rounded-lg lg:h-32 h-24 lg:w-auto w-96">
          <Link to="/forum" className="flex gap-4">
            <BsPeople size="40px" />
            <span className="text-4xl">{t("forum")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

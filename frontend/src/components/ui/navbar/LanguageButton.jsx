import React from "react";
import i18n from "../../../config/lang/i18n";

import { FaGlobe } from "react-icons/fa";

const LanguageButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex="0" className="btn btn-ghost gap-1 normal-case">
        <FaGlobe size="20px" />
      </div>
      <div className="dropdown-content bg-base-200 rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl">
        <ul className="menu menu-compact gap-1 p-3" tabIndex="0">
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("en")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="English"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
              />
              <span className="flex flex-1 justify-between">English</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("es")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="Español"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg"
              />
              <span className="flex flex-1 justify-between">Español</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("fr")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="Français"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1eb-1f1f7.svg"
              />
              <span className="flex flex-1 justify-between">Français</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("id")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="Indonesia"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ee-1f1e9.svg"
              />
              <span className="flex flex-1 justify-between">Indonesia</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("jp")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="日本語"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ef-1f1f5.svg"
              />
              <span className="flex flex-1 justify-between">日本語</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("ko")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="한국어"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f0-1f1f7.svg"
              />
              <span className="flex flex-1 justify-between">한국어</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("pt")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="Português"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f5-1f1f9.svg"
              />
              <span className="flex flex-1 justify-between">Português</span>
            </button>
          </li>
          <li>
            <button className="flex" onClick={() => i18n.changeLanguage("ru")}>
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="Русский"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f7-1f1fa.svg"
              />
              <span className="flex flex-1 justify-between">Русский</span>
            </button>
          </li>
          <li>
            <button
              className="flex"
              onClick={() => i18n.changeLanguage("zhCn")}
            >
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="中文"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1e8-1f1f3.svg"
              />
              <span className="flex flex-1 justify-between">中文</span>
            </button>
          </li>
          <li>
            <button
              className="flex"
              onClick={() => i18n.changeLanguage("zhTw")}
            >
              <img
                loading="lazy"
                width="20"
                height="20"
                alt="繁體中文"
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f9-1f1fc.svg"
              />
              <span className="flex flex-1 justify-between">繁體中文</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageButton;

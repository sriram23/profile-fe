import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitch.scss"

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  console.log("Current language: ", i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const switchLanguageText =
    i18n.language === "en" ? "தமிழில் பார்க்க" : "See in English";

  return (
    <div className="lang-switch">
      <button
        onClick={() => changeLanguage(i18n.language === "en" ? "ta" : "en")}
      >
        {switchLanguageText}
      </button>
    </div>
  );
};

export default LanguageSwitch;

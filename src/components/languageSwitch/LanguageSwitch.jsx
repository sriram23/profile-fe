import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitch.scss"

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  console.log("Current language: ", i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // The current language is stored in the local storage, to make the language switch refresh resistant.
    localStorage.setItem("language", String(i18n.language));
  };

  const switchLanguageText =
    localStorage.getItem('language') === "en" ? "தமிழில் பார்க்க" : "See in English";

  return (
    <div className="lang-switch">
      <button
        onClick={() => changeLanguage(localStorage.getItem('language') === "en" ? "ta" : "en")}
      >
        {switchLanguageText}
      </button>
    </div>
  );
};

export default LanguageSwitch;

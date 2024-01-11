/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import Switch from "react-switch";
import SUN from "../../assets/sun.png";
import MOON from "../../assets/half-moon.png";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import PreloadImage from "react-preload-image";

export default function Header() {
  // Scroll function
  const handleScrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.getElementById(targetId.split("#")[1]);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { t } = useTranslation();
  const [isScrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleResize = () => {
    const { innerWidth } = window;
    setScreenWidth(innerWidth);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <header
      className={`header-container-${theme} ${isScrolled && "header-scrolled"}`}
    >
      <a href="#about" onClick={scrollToTop}>
        <h2 className="header-title">{t("Sriram")}</h2>
      </a>
      {screenWidth > 768 ? (
        <nav className="nav-menu">
          <a href="#about" onClick={handleScrollToSection}>
            {t("About")}
          </a>
          <a href="#blog" onClick={handleScrollToSection}>
            {t("Blogs")}
          </a>
          <a href="#projects" onClick={handleScrollToSection}>
            {t("Projects")}
          </a>
          <a href="#work-history" onClick={handleScrollToSection}>
            {t("Experience")}
          </a>
          <a href="#contact" onClick={handleScrollToSection}>
            {t("Contact")}
          </a>
          <a href="#social" onClick={handleScrollToSection}>
            {t("Social.SocialLinks")}
          </a>
          <div className="theme-container">
            <Switch
              onChange={toggleTheme}
              checked={theme === "light"}
              checkedHandleIcon={
                <figure className="toggle-icon" style={{ color: "#FF8008" }}>
                  <PreloadImage src={SUN} alt={"Sun - Light Mode"} lazy />
                </figure>
              }
              uncheckedHandleIcon={
                <figure
                  className="toggle-icon"
                  style={{ color: "#6c7a89", fontSize: "20px" }}
                >
                  <PreloadImage src={MOON} alt={"Moon - Dark Mode"} lazy />
                </figure>
              }
              onColor="#89CFF3"
              offColor="#6c7a89"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <LanguageSwitch />
        </nav>
      ) : (
        <div className="hamburger-menu">
          <button className="ham-button" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? "\u2a2f" : "\u2630"}
          </button>
          <div className={`ham-menu  ${showMenu && "show-ham-menu"}`}>
            <a href="#about" onClick={handleScrollToSection}>
              {t("About")}
            </a>
            <a href="#blog" onClick={handleScrollToSection}>
              {t("Blogs")}
            </a>
            <a href="#projects" onClick={handleScrollToSection}>
              {t("Projects")}
            </a>
            <a href="#work-history" onClick={handleScrollToSection}>
              {t("Experience")}
            </a>
            <a href="#contact" onClick={handleScrollToSection}>
              {t("Contact")}
            </a>
            <a href="#social" onClick={handleScrollToSection}>
              {t("Social.SocialLinks")}
            </a>
            <span onClick={toggleTheme}>
              {theme === "light" ? "\u263d Dark Theme" : "\u2600 Light Theme"}
            </span>
            <LanguageSwitch />
          </div>
        </div>
      )}
    </header>
  );
}

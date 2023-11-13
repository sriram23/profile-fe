/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import Switch from "react-switch";
import SUN from "../../assets/sun.png"
import MOON from "../../assets/half-moon.png"

export default function Header() {
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
      <a href="#">
        {/* <h2 className="header-icon">SR</h2> */}
        {/* <div className="header-icon">
        <video autoPlay loop muted>
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div> */}
        <h2 className="header-title">Sriram</h2>
      </a>
      {screenWidth >= 768 ? (
        <nav className="nav-menu">
          <a href="#">About</a>
          <a href="#blog">Blogs</a>
          <a href="#projects">Projects</a>
          <a href="#work-history">Experience</a>
          <a href="#contact">Contact</a>
          {/* <span onClick={toggleTheme}>{theme === 'light'?"\u263d":"\u2600" }</span> */}
          <div className="theme-container">
            <Switch
              onChange={toggleTheme}
              checked={theme === "light"}
              checkedHandleIcon={
                <figure className="toggle-icon" style={{ color: "#FF8008" }}>
                  <img src={SUN} alt={"Sun - Light Mode"} />
                </figure>
              }
              uncheckedHandleIcon={
                <figure className="toggle-icon" style={{ color: "#6c7a89", fontSize: "20px" }}>
                  <img src={MOON} alt={"Moon - Dark Mode"} />
                </figure>
              }
              onColor="#FF8008"
              offColor="#6c7a89"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
        </nav>
      ) : (
        <div className="hamburger-menu">
          <button className="ham-button" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? "\u2a2f" : "\u2630"}
          </button>
          {showMenu && (
            <div className="ham-menu">
              <a href="#">About</a>
              <a href="#blog">Blogs</a>
              <a href="#projects">Projects</a>
              <a href="#work-history">Experience</a>
              <a href="#contact">Contact</a>
              <span onClick={toggleTheme}>
                {theme === "light" ? "\u263d Dark Theme" : "\u2600 Light Theme"}
              </span>
            </div>
          )}
        </div>
      )}
      {/* <div className="theme-container">
        <button onClick={toggleTheme}>{theme === 'light'?"\u263d":"\u2600" }</button>
      </div> */}
    </header>
  );
}

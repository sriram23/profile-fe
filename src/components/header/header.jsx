/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import {ThemeContext} from "../../Context/ThemeContext"

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false)
  const {theme, setTheme} = useContext(ThemeContext)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
}, []);
const handleScroll = () => {
  if(window.pageYOffset > 250) {
    setScrolled(true)
  } else {
    setScrolled(false)
  }
}
const handleResize = () => {
  const {innerWidth} = window;
  setScreenWidth(innerWidth);
}

const toggleTheme = () => {
  if(theme === 'light') {
    setTheme('dark')
  } else if(theme === 'dark') {
    setTheme('light')
  }
}
  return (
    <header className={`header-container-${theme} ${isScrolled && 'header-scrolled'}`}>
      <a href="#"><h2 className="header-icon">SR</h2></a>
      <h2 className="header-title">Sriram</h2>
      {screenWidth >= 768 ? 
        (<nav className="nav-menu">
          <a href="#about">About</a>
          <a href="#work-history">Work History</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#blog">Blogs</a>
          <a href="#tweets">Tweets</a>
          <a href="#contact">Contact</a>
        </nav>) :
        <div className="hamburger-menu">
          <button className="ham-button" onClick={() => setShowMenu(!showMenu)}>{showMenu? '\u2a2f' : '\u2630'}</button>
          {showMenu && <div className="ham-menu">
            <a href="#about">About</a>
            <a href="#work-history">Work History</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#blog">Blogs</a>
            <a href="#tweets">Tweets</a>
            <a href="#contact">Contact</a>
          </div>}
        </div>
      }
      <div>
        <button onClick={toggleTheme}>{theme === 'light'?"Dark":"Light" }</button>
      </div>
    </header>
  );
}

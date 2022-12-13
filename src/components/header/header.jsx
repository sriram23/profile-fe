import React, { useEffect, useState } from "react";
import "./header.scss";

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
const handleScroll = () => {
  if(window.pageYOffset > 250) {
    setScrolled(true)
  } else {
    setScrolled(false)
  }
}
  return (
    <header className={`header-container ${isScrolled && 'header-scrolled'}`}>
      <h2 className="header-icon">SR</h2>
      <h2 className="header-title">Sriram</h2>
      <nav className="nav-menu">
        <a href="#about">About</a>
        <a href="#work-history">Work History</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#blog">Blogs</a>
        <a href="#tweets">Tweets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

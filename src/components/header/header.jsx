import React, { useEffect, useState } from "react";
import "./header.scss";

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
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
      <h1 className="header-icon">SR</h1>
      <h1 className="header-title">Sriram</h1>
    </header>
  );
}

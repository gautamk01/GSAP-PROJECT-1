import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Show nav after intro animation (approximately 8 seconds)
    const introTimer = setTimeout(() => {
      setShowNav(true);
    }, 8000);

    const handleScroll = () => {
      // Change nav style when scrolled more than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setShowNav(true); // Also show nav when scrolling
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <nav
      className={`${isScrolled ? "scrolled" : ""} ${!showNav ? "hidden" : ""}`}
    >
      <div className="logo">
        <a href="#hero">Gautam Krishna M</a>
      </div>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#skills">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

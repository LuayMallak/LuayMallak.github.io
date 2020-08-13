import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="navList">
          <div className="navLink">
            <a href="/"> Home </a>
          </div>
          <div className="navLink">
            <a href="#about-me"> About Me </a>
          </div>
          <div className="navLink">
            <a href="#portfolio"> Portfolio </a>
          </div>
          <div className="navLink">
            <a href="#contact-me"> Contact Me </a>
          </div>
        </div>
      </nav>
    </>
  );
}

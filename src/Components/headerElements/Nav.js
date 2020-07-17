import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="navList">
          <li className="navLink">
            <a href="#home"> Home </a>
          </li>
          <li className="navLink">
            <a href="#portfolio"> Portfolio </a>
          </li>
          <li className="navLink">
            <a href="#about-me"> AboutMe </a>
          </li>
          <li className="navLink">
            <a href="#contact-me"> ContactMe </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

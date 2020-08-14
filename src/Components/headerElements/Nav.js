import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Nav() {
  const [isActive, setIsActive] = useState("");
  return (
    <>
      <nav className="nav">
        <div className="navList">
          <div onClick={() => setIsActive("home")} className="navLink">
            <AnchorLink href="#home">
              <p>Home</p>
            </AnchorLink>
          </div>
          <div onClick={() => setIsActive("aboutMe")} className="navLink">
            <AnchorLink href="#about-me">
              <p className={isActive === "aboutMe" ? "colored" : ""}>
                About Me
              </p>
            </AnchorLink>
          </div>
          <div onClick={() => setIsActive("portfolio")} className="navLink">
            <AnchorLink href="#portfolio">
              {" "}
              <p className={isActive === "portfolio" ? "colored" : ""}>
                Portfolio
              </p>{" "}
            </AnchorLink>
          </div>
          <div onClick={() => setIsActive("contactMe")} className="navLink">
            <AnchorLink href="#contact-me">
              {" "}
              <p className={isActive === "contactMe" ? "colored" : ""}>
                Contact Me
              </p>{" "}
            </AnchorLink>
          </div>
        </div>
      </nav>
    </>
  );
}

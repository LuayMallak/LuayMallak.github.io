import React from "react";
import Nav from "./headerElements/Nav";
import SocialLinks from "./headerElements/SocialLinks";

export default function Header() {
  return (
    <>
      <div className="header">
        <Nav />
        <SocialLinks />
      </div>
    </>
  );
}

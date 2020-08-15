import React from "react";
import Nav from "./headerElements/Nav";
import BurgerMenu from "./headerElements/BurgerMenu";

export default function Header() {
  return (
    <>
      <div className="header" id="header">
        <Nav />
        <BurgerMenu />
      </div>
    </>
  );
}

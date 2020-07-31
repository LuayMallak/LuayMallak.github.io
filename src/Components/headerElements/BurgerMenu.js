import React, { Component } from "react";

let display = "burger-navList-hidden";
let bar = "bar";
let barOne = "bar";
let barThree = "bar";
export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
    this.openBurgermenu = this.openBurgermenu.bind(this);
  }

  openBurgermenu() {
    if (this.state.isShown === false) {
      this.setState({ isShown: true });
      display = "burger-navList-hidden";
      bar = "bar";
      barOne = "bar";
      barThree = "bar";
    } else {
      this.setState({ isShown: false });
      display = "burger-navList";
      bar = "hiddenBar";
      barOne = "barOne";
      barThree = "barThree";
    }
  }

  render() {
    return (
      <>
        <div className="burgerMenu" onClick={this.openBurgermenu}>
          <div className={barOne}></div>
          <div className={bar}></div>
          <div className={barThree}></div>
        </div>
        <div className={display}>
          <div className="navLink">
            <a href="/" onClick={this.openBurgermenu}>
              {" "}
              Home{" "}
            </a>
          </div>
          <div className="navLink">
            <a href="#portfolio" onClick={this.openBurgermenu}>
              {" "}
              Portfolio{" "}
            </a>
          </div>
          <div className="navLink">
            <a href="#about-me" onClick={this.openBurgermenu}>
              {" "}
              AboutMe{" "}
            </a>
          </div>
          <div className="navLink">
            <a href="#contact-me" onClick={this.openBurgermenu}>
              {" "}
              ContactMe{" "}
            </a>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
    this.openBurgermenu = this.openBurgermenu.bind(this);
  }

  openBurgermenu() {
    if (this.state.isShown === true)
      this.setState({ isShown: !this.state.isShown });
    else this.setState({ isShown: !this.state.isShown });
  }

  render() {
    return (
      <>
        <div className="burgerMenu" onClick={this.openBurgermenu}>
          <div className={!this.state.isShown ? "bar" : "barOne"}></div>
          <div className={!this.state.isShown ? "bar" : "hiddenBar"}></div>
          <div className={!this.state.isShown ? "bar" : "barThree"}></div>
        </div>
        <div
          className={
            !this.state.isShown ? "burger-navList-hidden" : "burger-navList"
          }
        >
          <div className="navLink">
            <a href="/" onClick={this.openBurgermenu}>
              {" "}
              Home{" "}
            </a>
          </div>
          <div className="navLink">
            <a href="#about-me" onClick={this.openBurgermenu}>
              {" "}
              AboutMe{" "}
            </a>
          </div>
          <div className="navLink">
            <a href="#portfolio" onClick={this.openBurgermenu}>
              {" "}
              Portfolio{" "}
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

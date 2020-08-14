import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      isActive: "",
    };
  }

  render() {
    return (
      <>
        <div
          className="burgerMenu"
          onClick={() => this.setState({ isShown: !this.state.isShown })}
        >
          <div className={!this.state.isShown ? "bar" : "barOne"}></div>
          <div className={!this.state.isShown ? "bar" : "hiddenBar"}></div>
          <div className={!this.state.isShown ? "bar" : "barThree"}></div>
        </div>
        <div
          className={
            !this.state.isShown ? "burger-navList-hidden" : "burger-navList"
          }
        >
          <div
            onClick={() => this.setState({ isShown: false, isActive: "home" })}
            className="navLink"
          >
            <AnchorLink href="#home">
              <p>Home</p>
            </AnchorLink>
          </div>
          <div
            onClick={() =>
              this.setState({ isShown: false, isActive: "aboutMe" })
            }
            className="navLink"
          >
            <AnchorLink href="#about-me">
              <p className={this.state.isActive === "aboutMe" ? "colored" : ""}>
                About Me
              </p>
            </AnchorLink>
          </div>
          <div
            onClick={() =>
              this.setState({ isShown: false, isActive: "portfolio" })
            }
            className="navLink"
          >
            <AnchorLink href="#portfolio">
              <p
                className={this.state.isActive === "portfolio" ? "colored" : ""}
              >
                Portfolio
              </p>
            </AnchorLink>
          </div>

          <div
            onClick={() =>
              this.setState({ isShown: false, isActive: "contactMe" })
            }
            className="navLink"
          >
            <AnchorLink href="#contact-me">
              <p
                className={this.state.isActive === "contactMe" ? "colored" : ""}
              >
                Contact Me
              </p>
            </AnchorLink>
          </div>
        </div>
      </>
    );
  }
}

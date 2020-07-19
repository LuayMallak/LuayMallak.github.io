import React from "react";
import background from "../images/background.mp4";

export default function BackgroundVideo() {
  const videoSource = background;

  return (
    <div className="container">
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4" />
      </video>

      <div className="content">
        <div className="subContent">
          <h1>Hi, I am Luay Mallak</h1>
          <p>Full-stack junior Web Developer, live in Leipzig, Germany</p>
          <a href="#header" className="btn btn-outline-dark">
            Check my Portfolio
          </a>
          <img
            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

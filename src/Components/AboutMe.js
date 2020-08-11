import React from "react";
import Slide from "react-reveal/Slide";
export default function AboutMe() {
  return (
    <>
      <section className="aboutMe" id="about-me">
        <div className="skillsBarsContainer">
          <h1 className="">My Skills</h1>
          <div className="skillBar html">
            <p>HTML</p>
            <p>90</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar css3">
            <p>CSS3</p>
            <p>85</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar javaScript">
            <p>JavaScript</p>
            <p>90</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar react">
            <p>React</p>
            <p>80</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar nodeJs">
            <p>Node JS</p>
            <p>60</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar express">
            <p>Express</p>
            <p>75</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar mongoDb">
            <p>MongoDB & Mongoose</p>
            <p>70</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar git">
            <p>Git</p>
            <p>65</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>
        </div>
        <div className="whoIAm"></div>
      </section>
    </>
  );
}

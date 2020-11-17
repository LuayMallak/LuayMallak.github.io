import React from "react";
import Slide from "react-reveal/Slide";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="cards-container">
          <Slide bottom>
            <a
              className="link"
              href="https://doit4me-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image do-it-4-me">
                  <img
                    src={require("../images/do-it-4-me.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Do it 4 me</p>
                  <p className="description">
                    A full stack app implemented as the final project at Digital
                    Career Institute{" "}
                  </p>
                </div>
              </div>
            </a>
          </Slide>

          <Slide bottom>
            <a
              className="link"
              href="https://luaymallak.codes/MovieApp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image movie-app">
                  <img
                    src={require("../images/movie-app.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Movie App</p>
                  <p className="description">
                    A react App with a free movie API using Context, hooks and
                    styled-components{" "}
                  </p>
                </div>
              </div>
            </a>
          </Slide>

          <Slide bottom>
            <a
              className="link"
              href="https://luaymallak.codes/cocktailmaster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image react-cocktail-master">
                  <img
                    src={require("../images/react-cocktail-master.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Cocktail App</p>
                  <p className="description">
                    An app created with React from a free API during the one
                    year course at DCI{" "}
                  </p>
                </div>
              </div>
            </a>
          </Slide>
          <Slide bottom>
            <a
              className="link"
              href="http://luaymallak.codes/cocktailmasterVanillaJavascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image javascript-cocktail-master">
                  <img
                    src={require("../images/vanilla-javascript-cocktail-master.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Javascript Cocktail App</p>
                  <p className="description">
                    A vanilla Javascript app from a free API during the one year
                    course at DCI.
                  </p>
                </div>
              </div>
            </a>
          </Slide>
          <Slide bottom>
            <a
              className="link"
              href="http://luaymallak.codes/htmlcssportfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image html-css-portfolio">
                  <img
                    src={require("../images/html-css-portfolio.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Portfolio HTML/CSS</p>
                  <p className="description">
                    My first portfolio, created only with HTML5 and CSS
                  </p>
                </div>
              </div>
            </a>
          </Slide>

          <Slide bottom>
            <a
              className="link"
              href="https://github.com/LuayMallak/Todo-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="card-image todo-api">
                  <img
                    src={require("../images/todo-api-github.png")}
                    alt="app screenshot"
                  />
                </div>
                <div className="card-body">
                  <p className="title">Todo API</p>
                  <p className="description">
                    A Todo API, created from scratch with node js and mongoDB as
                    a project at DCI
                  </p>
                </div>
              </div>
            </a>
          </Slide>
        </div>
      </div>
    </>
  );
}

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
              href="https://luaymallak.codes/makeupshop/"
              target="_blank"
            >
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Makeup App</p>
                  <p className="description">
                    An app designed and created in cooperation with classmates
                    in DCI
                  </p>
                </div>
              </div>
            </a>
          </Slide>
          <a
            className="link"
            href="https://luaymallak.codes/moveiapp/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Movie App</p>
                  <p className="description">
                    A react App with a free movie API{" "}
                  </p>
                </div>
              </div>
            </Slide>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/cocktailmaster/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Cocktail App</p>
                  <p className="description">
                    An app created with React from a free API in cooperation
                    with classmates in DCI{" "}
                  </p>
                </div>
              </div>
            </Slide>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/js-cocktailmaster/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Javascript Cocktail App</p>
                  <p className="description">
                    A vanilla Javascript app from a free API in cooperation with
                    classmates in DCI.
                  </p>
                </div>
              </div>
            </Slide>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/protfolio/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Portfolio HTML/CSS</p>
                  <p className="description">
                    My first portfolio, created only with HTML and CSS
                  </p>
                </div>
              </div>
            </Slide>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/SPA-todo-app/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Todo APP</p>
                  <p className="description">
                    A Todo APP, created with React from scratch at DCI
                  </p>
                </div>
              </div>
            </Slide>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/todo-api/"
            target="_blank"
          >
            <Slide bottom>
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://loremflickr.com/320/240/brazil,rio"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="title">Todo API</p>
                  <p className="description">
                    A Todo API, created with from scratch as an assignment at
                    DCI
                  </p>
                </div>
              </div>
            </Slide>
          </a>
        </div>
      </div>
    </>
  );
}

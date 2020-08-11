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
                  <h5 className="title">Makeup App</h5>
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
                  <h5 className="title">Movie App</h5>
                  <p className="description">An App form a free movie API </p>
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
                  <h5 className="title">Cocktail App</h5>
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
                  <h5 className="title">Vanilla Javascript Cocktail App</h5>
                  <p className="description">
                    An app created with vanilla Javascript from a free API in
                    cooperation with classmates in DCI as a module project
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
                  <h5 className="title">Portfolio HTML/CSS</h5>
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
                  <h5 className="title">Todo APP</h5>
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
                  <h5 className="title">Todo API</h5>
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
      {/* <div className="portfolio" id="portfolio">
        <div className="cards-container">
          <a
            className="link "
            href="https://luaymallak.codes/makeupshop/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Makeup App</h5>
                <p className="description">
                  An app designed and created in cooperation with classmates in
                  DCI
                </p>
              </div>
            </div>
          </a>

          <a
            className="link"
            href="https://luaymallak.codes/moveiapp/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Movie App</h5>
                <p className="description">An App form a free movie API </p>
              </div>
            </div>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/cocktailmaster/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Cocktail App</h5>
                <p className="description">
                  An app created with React from a free API in cooperation with
                  classmates in DCI{" "}
                </p>
              </div>
            </div>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/js-cocktailmaster/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Vanilla Javascript Cocktail App</h5>
                <p className="description">
                  An app created with vanilla Javascript from a free API in
                  cooperation with classmates in DCI as a module project
                </p>
              </div>
            </div>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/protfolio/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Portfolio HTML/CSS</h5>
                <p className="description">
                  My first portfolio, created only with HTML and CSS
                </p>
              </div>
            </div>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/SPA-todo-app/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Todo APP</h5>
                <p className="description">
                  A Todo APP, created with React from scratch at DCI
                </p>
              </div>
            </div>
          </a>
          <a
            className="link"
            href="https://luaymallak.codes/todo-api/"
            target="_blank"
          >
            <div className="card">
              <div className="card-image">
                <img src="https://loremflickr.com/320/240/brazil,rio" alt="" />
              </div>
              <div className="card-body">
                <h5 className="title">Todo API</h5>
                <p className="description">
                  A Todo API, created with from scratch as an assignment at DCI
                </p>
              </div>
            </div>
          </a>
        </div>
      </div> */}
    </>
  );
}

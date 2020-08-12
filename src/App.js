import React from "react";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";

import "./styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Header />
        <main className="main">
          <AboutMe />
          <Portfolio />
          <ContactMe />
        </main>
      </div>
    );
  }
}

export default App;

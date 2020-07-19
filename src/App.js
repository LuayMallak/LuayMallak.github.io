import React from "react";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <main className="main">
        <Header />
        <Portfolio />
        <AboutMe />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;

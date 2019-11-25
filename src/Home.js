import React from "react";
import Banner from "./components/bannerComp.js";
import AboutSec from "./components/aboutComp.js";
import Packages from "./components/packageComp.js";
import Contact from "./components/contactComp.js";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <AboutSec />
        <Packages />
        <Contact />
      </div>
    );
  }
}

export default Home;

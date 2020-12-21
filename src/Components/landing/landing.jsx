import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Typewriter from "typewriter-effect";

class Landing extends Component {
  state = {
    name: "LAUREL DENTINGER",
    displayedName: "",
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div id="landing">
        <div id="banner">
          <h1>LAUREL DENTINGER</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["DESIGNER", "DEVELOPER", "DATA ANALYST", "TEACHER"],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </h2>
          <Link to="/projects">
            <button>Enter Site</button>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Landing;

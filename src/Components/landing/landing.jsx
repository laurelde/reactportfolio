import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <>
        <h1>LED</h1>
        <p>Design & Development</p>
        <hr />
        <h2>
          Hi! My name is Laurel, and I’m a UX Designer and Frontend Developer.
          Welcome to my portfolio - come check out my latest projects!
        </h2>
        <Link to="/projects">
          <button>Enter Site</button>
        </Link>
      </>
    );
  }
}

export default Landing;

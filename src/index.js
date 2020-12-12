import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import Projects from "./Components/projects/projects";
import About from "./Components/about/about";
import Landing from "./Components/landing/landing";
import Resume from "./Components/resume/resume";
import Report from "./Components/report/report";

const routing = (
  <Router>
    <Route exact path="/" component={Landing} />
    <Route exact path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

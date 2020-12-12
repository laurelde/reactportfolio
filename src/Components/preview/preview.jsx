import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Report from "../report/report";

class Preview extends Component {
  state = {};
  render() {
    return (
      <div>
        <img></img>
        <Link to={`projects/${this.props.link}`}>
          <button class="btn btn-primary">View Project</button>
        </Link>
        <Router>
          <Route path={`projects/:${this.props.id}`} component={Report} />
        </Router>
      </div>
    );
  }
}

export default Preview;

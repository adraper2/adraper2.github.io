import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

var myColors = { White: "#FFFFFF", Purple: "#8A2BE2" };

// stateless functional component
class NavBar extends Component {
  state = {
    moved: true
  };

  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <nav
        className={this.getNavClasses()}
        style={{ backgroundColor: myColors.White, position: "fixed", top: 0 }}
      >
        <a className="navbar-brand" href="#">
          Aidan James Draper
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li className="nav-item d-flex justify-content-end">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <a className="nav-link" href="#">
                Publications
              </a>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1W1rnrqYP_LwllfPb8mCXOhWutR_r1zmc/view?usp=sharing"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  getNavClasses() {
    let classes = "mynav navbar navbar-expand-md ";
    console.log(this.props);
    classes +=
      this.props.onTop === true ? "navbar-light" : "navbar-dark bg-dark";
    return classes;
  }
}

export default NavBar;

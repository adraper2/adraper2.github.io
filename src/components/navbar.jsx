import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import cv from "../content/aidan_draper_resume_2023.pdf";
import { FaFilePdf } from 'react-icons/fa';

var myColors = { White: "#FFFFFF", Purple: "#8A2BE2" };

// stateless functional component
class NavBar extends Component {
  state = {
    moved: true
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        className={this.getNavClasses()}
        style={{ backgroundColor: myColors.White, position: "fixed", top: 0 }}
      >
        <Link to="/" className="navbar-brand">
          Aidan James Draper
        </Link>
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
              <NavLink exact to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item d-flex justify-content-end">
              <NavLink exact to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <NavLink exact to="/blogs" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <NavLink exact to="/hobbies" className="nav-link">
                Hobbies
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <NavLink exact to="/publications" className="nav-link">
                Pubs
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <a className="nav-link" href={cv}>
                <FaFilePdf />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  getNavClasses() {
    let classes = "mynav navbar navbar-expand-md ";
    classes +=
      this.props.onTop === true ? "navbar-light" : "navbar-dark bg-dark";
    return classes;
  }
}

export default NavBar;

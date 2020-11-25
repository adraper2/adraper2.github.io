import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Portfolio from "./components/portfolio";
import Publications from "./components/publications";
import ProjectPage from "./components/project-page";
import Hobbies from "./components/hobbies";
import Blogs from "./components/blogs";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import json_projects from './content/projects.json'

const NoMatch = ({ location }) => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <h3 style={{ textAlign: "center" }}>
      Sorry! No page was found under the path: <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  state = {
    isTop: true, 
    projects: json_projects
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar onTop={this.state.isTop} />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/projects"
              render={props => <Projects {...props} state={this.state} />}
            />
            <Route path="/publications" component={Publications} />
            {this.state.projects.map(project => (
              <Route
                path={"/" + project.pageLink}
                render={props => <ProjectPage {...props} project={project} />}
              />
            ))}
            <Route path="/hobbies" component={Hobbies} />
            <Route path="/blog" component={Blogs} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

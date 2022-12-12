import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Projects from "./components/projects";
import ProjectPage from "./components/project-page";
import Portfolio from "./components/portfolio";
import Publications from "./components/publications";
import Hobbies from "./components/hobbies";
import Blogs from "./components/blogs";
import BlogPage from "./components/blog-page";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import json_projects from './content/projects.json'
import json_blogs from './content/blogs.json'

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
    projects: json_projects,
    blogs: json_blogs
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
            <Route path="/about" component={About} />
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
            // <Route path="/blog" component={Blogs} />
            <Route
              path="/blogs"
              render={props => <Blogs {...props} state={this.state} />}
            />
            {this.state.blogs.map(blog => (
              <Route
                path={"/" + blog.pageLink}
                render={props => <BlogPage {...props} blog={blog} />}
              />
            ))}
            <Route component={NoMatch} />
          </Switch>
          {window.location.pathname !== "/" && <Footer />}
        </main>
      </React.Fragment>
    );
  }
}

export default App;

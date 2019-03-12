import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Portfolio from "./components/portfolio";
import Publications from "./components/publications";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
    isTop: true
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
      <BrowserRouter>
        <React.Fragment>
          <NavBar onTop={this.state.isTop} />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/projects" component={Projects} />
              <Route path="/publications" component={Publications} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

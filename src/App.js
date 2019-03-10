import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
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
          <div className="top-container">
            <p>
              Hi, my name is Aidan! I am a senior studying Computer Science and
              Statistics at Elon University in North Carolina. I plan on
              graduating this May and pursuing a Ph.D. afterwards.{" "}
            </p>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

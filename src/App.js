import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

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
      <React.Fragment>
        <NavBar onTop={this.state.isTop} />

        <main className="container">
          <div className="top-container">
            <p>
              Hi, my name is Aidan! I am a senior studying Computer Science and
              Statistics at Elon University in North Carolina. I plan on
              graduating this May and pursuing a Ph.D. afterwards. My research
              interests are in Machine Learning, Bayesian Statistics, and
              general Classification Algorithms. I am particularly interested in
              their applications in Computer Vision and Ecology.{" "}
            </p>
            <p>
              <b>
                Checkout{" "}
                <a href="https://drive.google.com/file/d/1IGt0naMDSIeAdVNg4FpDtcW5Uj9f1M4h/view?usp=sharing">
                  the preprint
                </a>{" "}
                of the article that I just submitted to the NC Journal of
                Mathematics and Statistics!{" "}
              </b>
            </p>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

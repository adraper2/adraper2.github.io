import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="top-container">
          <p>
            Hi, my name is Aidan! I am a senior studying Computer Science and
            Statistics at Elon University in North Carolina. I plan on
            graduating this May and pursuing a Ph.D. afterwards. My research
            interests are in Machine Learning, Bayesian Statistics, and general
            Classification Algorithms. I am particularly interested in their
            applications in Computer Vision and Ecology.{" "}
          </p>
          <p>
            I urge you to comeback soon. I built this site on March 10, 2018.
            There is still more work to come.{" "}
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
          <br />
          <br />
          <br />
          <p style={{ textAlign: "center" }}>My Github Commit Chart:</p>
          <img
            className="github_chart"
            src="http://ghchart.rshah.org/adraper2"
            alt="github chart"
          />
        </div>
      </main>
    );
  }
}

export default Home;

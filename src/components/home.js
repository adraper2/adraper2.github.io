import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="top-container">
          <p>
            <code>Hello, world!</code>
          </p>
          <p>
            <b>Who am I:</b> I am a senior studying Computer Science and
            Statistics at Elon University in North Carolina. I plan on
            graduating this May and attending the University of Notre Dame as a
            Computer Science Ph.D. candidate and graduate assistant in the fall.
            I will be working in the <a href="https://cvrl.nd.edu/">CVRL</a> at
            Notre Dame. My research interests are in Machine Learning, Bayesian
            Statistics, and general Classification Algorithms. I am particularly
            interested in the intersection between Bayesian ideology and modern
            Neural Network structure and the potential applications they could
            have in Computer Vision and Ecology.
          </p>
          <p>
            <b>What have I been up to:</b> Recently, I have began a new project
            where I am attempting to transcribe videos of guitar playing into
            tablature using OpenCV and a Convolutional Neural Network built
            within PyTorch. Additionally, I am finishing up the remaining
            components of this website!
          </p>
          <p>
            I urge you to comeback soon. I built this site on March 10, 2018.
            There is still more work to come.{" "}
          </p>
          For this website, I still have to:
          <ul>
            <li>Finish the hobbies page</li>
            <li>
              Add a grid of cards using the React implementation of Material UI
            </li>
            <li>Test all of the UX for bugs</li>
          </ul>
          <p>You can see all of my recent commits on GitHub below.</p>
          <p style={{ textAlign: "center" }}>
            <code>GitHub Commits</code>
          </p>
          <img
            className="github_chart"
            src="http://ghchart.rshah.org/adraper2"
            alt="github chart"
          />
        </div>
        <br />
        <p>
          Also, checkout{" "}
          <a href="https://drive.google.com/file/d/1IGt0naMDSIeAdVNg4FpDtcW5Uj9f1M4h/view?usp=sharing">
            the preprint
          </a>{" "}
          of the article that I just submitted to the NC Journal of Mathematics
          and Statistics!{" "}
        </p>
      </main>
    );
  }
}

export default Home;

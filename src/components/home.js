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
            <b>Who am I:</b> I am a new graduate research assistant in the
            Computer Vision Research Lab{" "}
            <a href="https://cvrl.nd.edu/">(CVRL)</a> at Notre Dame. I am
            working towards a PhD in Computer Science as of this Fall. I
            graduated from Elon University in the Spring of 2019 with degrees in
            Computer Science and Statistics. To date, my research interests are
            in Deep Learning, Bayesian Statistics, and general purpose ML
            classification models. I am loosely interested in the potential
            applications these models have in Computer Vision, Biometrics and
            Ecology.
          </p>
          <p>
            <b>What have I been up to:</b> As of right now, I am working on a
            biometrics project involving various forms of fingerprint capture
            and identification. We are comparing matching accuaracies of
            contactless scanners with traditional 2D live scanners. Currently, I
            am investigating how an autoencoder network may be useful for this
            problem. On the backburner, I have a fun side project where I am
            attempting to transcribe videos of guitar playing into tablature
            using a CNN and data collected from YouTube. Additionally, I will be
            finishing up the remaining components of this website soon!
          </p>
          <p>
            I urge you to comeback soon for project updates as well for the
            introduction of a blog I am starting in the near future. I built
            this site on March 10, 2019 and it is still in its draft stage.
            There is more work to come.{" "}
          </p>
          For this website, I still have to:
          <ul>
            <li>Finish the hobbies page</li>
            <li>
              Add a grid of cards using the React implementation of Material UI
            </li>
            <li>Test all of the UX for bugs</li>
          </ul>
          <p>
            If you are interested in the code for this website, checkout my
            GitHub repo{" "}
            <a href="https://github.com/adraper2/adraper2.github.io/tree/source/src">
              here
            </a>
            . You can see all of my recent commits on GitHub below.
          </p>
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
        <p>This site was last updated December 3rd, 2019.</p>
      </main>
    );
  }
}

export default Home;

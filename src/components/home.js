import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="top-container">
          <div className="aligned-container">
            <div className="align" id="home_prof">
              <img
                id="prof-image"
                src={require(`../images/grad_low_res.png`)}
                style={{ height: 150 }}
              />
            </div>
            <div className="align" id="home_github">
              <p style={{ textAlign: "center" }}>
                <code>GitHub Commits</code>
              </p>
              <img
                className="github_chart"
                src="http://ghchart.rshah.org/adraper2"
                alt="github chart"
              />
            </div>
          </div>
          <br />
          <hr />
          <p>
            <code>Hello, world!</code>
          </p>
          <p>
            <b>Who am I:</b> I am a graduate research assistant in the Computer
            Vision Research Lab <a href="https://cvrl.nd.edu/">(CVRL)</a> at
            Notre Dame. I have been working towards a PhD in Computer Science
            since July of 2019. I graduated from Elon University in the Spring
            of 2019 with degrees in Computer Science and Statistics. To date, my
            research interests are in Deep Learning, Bayesian Statistics, and
            general purpose ML classification models. I am <i>loosely</i>{" "}
            interested in the potential applications these models have in
            Computer Vision, Biometrics and Ecology.
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
            <b>What am I interested in:</b> I follow the premier league (YNWA!)
            and play on a few local teams in South Bend. I do my best to follow
            other sports, like college football and basketball, but I cannot say
            that I am always up-to-date. In New York, I loved to Kayak and Hike.
            I have a 4 year old Aussie named Chance, who is super loveable but
            also VERY energetic.
          </p>
          <p>
            I urge you to comeback soon for project updates as well for the
            introduction of the blog I am starting in the near future. I built
            this site on March 10, 2019 and it is still far from complete. There
            is more work to come.{" "}
          </p>
          What I am working on for this website:
          <ul>
            <li>
              Finishing the hobbies page - Adding a grid of cards using the
              React implementation of Material UI
            </li>
            <li>Updating my CV and project pages</li>
            <li>Finishing and deploying the blog page</li>
          </ul>
          <p>
            If you are interested in the code for this website, checkout my
            GitHub repo{" "}
            <a href="https://github.com/adraper2/adraper2.github.io/tree/source/src">
              here
            </a>
            . You can see all of my recent commits on GitHub below.
          </p>
        </div>
        <br />
        <p>This site was last updated December 11th, 2019.</p>
      </main>
    );
  }
}

export default Home;

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
            <code>Hey, world!</code>
          </p>
          <p>
            <b>Who am I:</b> I am a graduate research assistant in the Computer
            Vision Research Lab <a href="https://cvrl.nd.edu/">(CVRL)</a> at
            Notre Dame. I have been working towards a PhD in Computer Science
            since July of 2019. I graduated from Elon University in the Spring
            of 2019 with degrees in Computer Science and Statistics. To date, my
            research interests are in depth estimation from multiview scenes and 
            connecting neural topology with the human brain. I am working towards
            applications of these models to solve problems in Pyschology,
            Computer Vision, and Biometrics.
          </p>
          <p>
            <b>What have I been up to:</b> Currently, I am wrapping up a
            fingerprint biometrics project that is exploring ways to improve the verification
            score of unconstrained, contactless smartphone fingerprint scanners
            when matching with legacy contact-based images. I am looking to improve depth reconstruction
            from RGB cameras when using left-right consistency-based unsupervised depth estimation models. 
            My spare time is spent on studying the intersection of modern neural toplogies with our current 
            understanding of the human brain through the context of emotional response to images. 
            One day I will be finishing up the remaining components of this website! But not anytime soon...
          </p>
          <p>
            <b>What am I interested in:</b> I follow the premier league (YNWA)
            and play on a few local soccer teams in South Bend. I am an avid cyclist and race with the ND Cycling Team.
            I do my best to follow other sports, like college football and basketball, but I cannot say
            that I always keep up-to-date. In New York, I loved to Kayak and Hike.
            I have a 4 year old Aussie named Chance, who is super loveable but
            also VERY energetic.
          </p>
          <p>
            I urge you to comeback soon for my project updates as well for the
            introduction of the blog I am starting in the near future. I built
            this site on March 10, 2019 and there is much more work I can do for it.{" "}
          </p>
          Unfinished website components:
          <ul>
            <li>
              Starting hobbies page (and a blog?) 
            </li>
            <li>Updating my CV and project pages</li>
            <li>Finishing a project creation python script to make adding content easier</li>
          </ul>
          <p>
            If you are interested in the code for this website, checkout my
            GitHub repo{" "}
            <a href="https://github.com/adraper2/adraper2.github.io/tree/source/src">
              here
            </a>
            .
          </p>
        </div>
        <br />
      </main>
    );
  }
}

export default Home;

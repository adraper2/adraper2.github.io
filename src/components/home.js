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
            <b>Who am I:</b> I am a data engineer and learning experience designer for 
            <a href="https://pathstream.com"> Pathstream</a>. I graduated from Elon University in the Spring
            of 2019 with degrees in Computer Science and Statistics. After that, I spent two 
            years in a PhD pogram researching the application of neural networks for
            multiview scene reconstructions in a Computer Vision lab 
            <a href="https://cvrl.nd.edu/"> (CVRL)</a> at Notre Dame.
          </p>
          <p>
            <b>What have I been up to:</b> I work on ETL pipelines and am learning Django for the purpose
             of data warehousing. I am interested learning more about data engineering and appreciate 
             the diversity in toolbelt that full-stack engineering have. I hope to dip my toes in more data 
             engineering projects and react native apps in the future. Startups are what 
             interest me -- the small teams, fast-paced environment, and noticeable impact are my energizers.
          </p>
          <p>
            <b>What am I interested in:</b> I follow the premier league (YNWA)
            and play on a few local soccer teams in South Bend. I was an avid cyclist (less so now) and 
            used to race with the ND Cycling Team. I do my best to follow other sports, like college football 
            and basketball, but I cannot say that I always keep up-to-date. In New York, I loved to Kayak and Hike.
            I have a 4 year old Aussie named Chance, who is super loveable but also VERY energetic.
          </p>
          
          Note that this website has unfinished components:
          <ul>
            <li>
              Building out Material cards and pages for Blog & Hobbies. 
            </li>
            <li>Updating resume and project pages content</li>
            <li>Adding a host content manager to make contributing easier</li>
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

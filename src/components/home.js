import React, { Component } from "react";
import fb_image from "../content/Facebook.png";
import github_image from "../content/Github.png";
import insta_image from "../content/Instagram.png";
import link_image from "../content/Linkedin.png";
import twit_image from "../content/Twitter.png";

class Home extends Component {
  render() {
    return (
      <main className="main-container" id="home-top-container">
        <div className="top-container">
          <div className="aligned-container">
            <div className="align" id="home_prof">
              <img
                id="prof-image"
                src={require(`../images/aidan_prof_2022.png`)}
                style={{ height: 150 }}
              />
            </div>
            <div className="align" id="home_github">
              <p id="home-name-text" style={{ textAlign: "center" }}>
               Aidan James Draper 
              </p>

              <p style={{ textAlign: "center" }}>
                <code>Software Engineer & Data Hobbyist</code>
              </p>
              <img
                className="github_chart"
                src="http://ghchart.rshah.org/adraper2"
                alt="github chart"
              />
            <div className="align" id="home_prof_icons">
                <p></p>
          <div align="center" id="home_prof_icons">
          <a
            className="account_links"
            href="https://www.facebook.com/aidan.draper"
          >
            <img src={fb_image} className="accounts" alt="facebook" />
          </a>
          <a className="account_links" href="https://github.com/adraper2">
            <img src={github_image} className="accounts" alt="github" />
          </a>
          <a
            className="account_links"
            href="https://www.instagram.com/adraper19/"
          >
            <img src={insta_image} className="accounts" alt="instagram" />
          </a>
          <a
            className="account_links"
            href="https://www.linkedin.com/in/aidan-draper/"
          >
            <img src={link_image} className="accounts" alt="linkedin" />
          </a>
          <a className="account_links" href="https://twitter.com/adraper19">
            <img src={twit_image} className="accounts" alt="twitter" />
          </a>

              </div>
          </div>

            </div>
          </div>
                    <br />
          
        </div>
        <br />
      </main>
    );
  }
}

export default Home;

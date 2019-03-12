import React, { Component } from "react";
import reactLogo from "../logo.svg";
import fb_image from "../content/Facebook.png";
import github_image from "../content/Github.png";
import insta_image from "../content/Instagram.png";
import link_image from "../content/Linkedin.png";
import twit_image from "../content/Twitter.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <hr />
        <div align="center" className="footer-element">
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
        <div align="center" className="footer-element">
          Copyright &copy; 2019 | Aidan James Draper
        </div>
        <div align="center" className="footer-element">
          <img
            src={reactLogo}
            className="App-logo"
            id="reactLogo"
            alt="react logo"
          />
          Built using React.{" "}
        </div>
      </div>
    );
  }
}

export default Footer;

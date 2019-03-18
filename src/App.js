import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Portfolio from "./components/portfolio";
import Publications from "./components/publications";
import ProjectPage from "./components/project-page";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Z_BLOCK } from "zlib";

const NoMatch = ({ location }) => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <h3 style={{ textAlign: "center" }}>
      Sorry! No page was found under the path: <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  state = {
    isTop: true,
    projects: [
      {
        id: 5,
        projectImage: "reactLogo.png",
        projectTitle: "ReactJS Portfolio Site",
        projectDesc:
          "This is my current project. I am building a Single Page Application portfolio site using the React JS library, all of which is hosted on Github Pages. I also use the GitHub API to pull current repository information. Prior to this experience, I had very little JavaScript exposure and no ReactJS background. It has been a great experience learning how the React Server DOM helps optimize runtime of Front End UIs. Hope you enjoy the site!",
        projectLink: "adraper2.github.io",
        pageLink: "react_site",
        paragraphOne: "",
        contentOne: "",
        paragraphTwo: "",
        contentTwo: ""
      },
      {
        id: 1,
        projectImage: "zoom_noise.png",
        projectTitle: "Visual Perceptions of Image Denoising",
        projectDesc:
          "ABSTRACT: Statisticians, as well as machine learning and computer vision experts, have been studying image reconstitution through denoising different domains of photography, such as textual documentation, tomographic, astronomical, and low-light photography. In this paper, we apply common inferential kernel filters in the R and python languages, as well as Adobe Lightroom's denoise filter, and compare their effectiveness in removing noise from JPEG images. We ran standard benchmark tests to evaluate each method's effectiveness for removing noise. In doing so, we also surveyed students at Elon University about their opinion of a single filtered photo from a collection of photos processed by the various filter methods. Many scientists believe that noise filters cause blurring and image quality loss so we analyzed whether or not people felt as though denoising causes any quality loss as compared to their noiseless images. Individuals assigned scores indicating the image quality of a denoised photo compared to its noiseless counterpart on a 1 to 10 scale. Survey scores are compared across filters to evaluate whether there were significant differences in image quality scores received. Benchmark scores were compared to the visual perception scores. Then, an analysis of covariance test was run to identify whether or not survey training scores explained any unplanned variation in visual scores assigned by students across the filter methods.",
        projectLink: "Noise_Reduction_Research-STS499",
        pageLink: "noise_reduction",
        paragraphOne: "",
        contentOne: "",
        paragraphTwo: "",
        contentTwo: ""
      },
      {
        id: 2,
        projectImage: "prediction_visual_scam2.png",
        projectTitle: "DISC REU: Marshland Random Forest Model",
        projectDesc:
          "This is an on going research area in the McLachlan Lab at the University of Notre Dame. The goal of this project is to implement a similar methodology implemented by Meghan Vahsen (a graduate student in the lab who classified Tamarisk in the Colorado River Basin) to monitor population abundance of species of sedge and grass in the Chesapeake. In particular, we have data from the Smithsonian Environmental Research Center's marshland plots.",
        projectLink: "DISC_chesapeake",
        pageLink: "DISC_chesapeake",
        paragraphOne: "",
        contentOne: "",
        paragraphTwo: "",
        contentTwo: ""
      },
      {
        id: 3,
        projectImage: "chopper_results.png",
        projectTitle: "DISC REU: Bayesian Hierarchical Model",
        projectDesc:
          "We recreated a Bayesian Poisson point process model from a paper written by Malcolm Itter. Malcolm Itter is a PhD candidate at Michigan State University studying forest demographic processes. The Bayesian model attempts to predict local fires surrounding lakes by investigating charcoal counts from the past as an indicator of a regional or local fire. The Poisson process is a fitting addition to the model given the use of charcoal counts. With that being said, the original model was developed on the notion that charcoal data could be separated into a background and a foreground where the background represents regional fire noise and the foreground represents peak charcoal amounts that are caused by a local fire. This idea held true in Alaskan lakes, but now we are interested as to whether or not this is the case with lakes residing in the Midwest. We have 18 lakes of interest that we will model separately first and then, jointly.",
        projectLink: "DISC_bayesian",
        pageLink: "DISC_bayesian",
        paragraphOne: "",
        contentOne: "",
        paragraphTwo: "",
        contentTwo: ""
      },
      {
        id: 4,
        projectImage: "spotify_mood.jpg",
        projectTitle: "Mood Analysis of a Spotify Saved Music Library",
        projectDesc:
          "In this project, I analyze the sentiment and lyrics in my own Spotify Saved Music library. I implement Gensim's LDA Topic Modeling, NLTK's Vader Sentiment Analyzer, and a multiple linear regression on data that I pull from the Spotify and Genius APIs. The project served as my final for CSC 401 - Data Mining and Machine Learning.",
        projectLink: "CSC401-Final-Project",
        pageLink: "mood_analysis",
        contentOne: "",
        contentTwo: ""
      },
      {
        id: 6,
        projectImage: "kendrick.jpeg",
        projectTitle: "Spotitry: A Personalized Music Playlist Generator",
        projectDesc:
          "During December of 2017, Marcus Zimmermann and Aidan Draper decided to spend their spare time developing an algorithm to fetch new music for users based on their 'short term' listening habits. Using a variety of variables, including a popularity rating < 50, the top 3 genres, similar artists, and grouping based on audio features, they developed two playlists unique to their accounts below. This is still a work in progress and currently the python script only grabs the top search result for each query run. The entire repository can be found here.",
        projectLink: "spotitry",
        pageLink: "spotitry",
        contentOne: (
          <iframe
            src="https://open.spotify.com/embed/user/adraper19/playlist/51eUjU2CBAzWBtu8wcXsdk"
            frameborder="0"
            style={{
              margin: "auto",
              display: "block",
              width: 600,
              height: 380
            }}
            className="embed-content"
          />
        ),
        contentTwo: (
          <p style={{ color: "gray", textAlign: "center" }}>
            Playlist 1: Aidan's Custom Playlist based on his short term
            listening habits. Currently, the script grabs similar artists from
            the top 10 most listened to artists as well as the top 5 genres from
            the top 50 most listened to artists and searches for tracks artist
            by artist. For now, it just adds the first result.
          </p>
        ),
        contentThree: (
          <iframe
            src="https://open.spotify.com/embed/user/mazimmermann26/playlist/1o8G02KEfj4JYJu8JmGxGI"
            frameborder="0"
            style={{
              margin: "auto",
              display: "block",
              width: 600,
              height: 380
            }}
            className="embed-content"
          />
        ),
        contentFour: (
          <p style={{ color: "gray", textAlign: "center" }}>
            Playlist 2: Marcus's Custom Playlist based on his short term
            listening habits. Currently, the script grabs similar artists from
            the top 10 most listened to artists as well as the top 5 genres from
            the top 50 most listened to artists and searches for tracks artist
            by artist. For now, it just adds the first result.
          </p>
        )
      },
      {
        id: 7,
        projectImage: "clt.png",
        projectTitle: "Central Limit Theorem Shiny Applciation",
        projectDesc:
          "This was the final project for our STS 347, Statistical Modeling in R, class. For the project, we created a Shiny App within R to show to statistical and non-statistical audiences how the Central Limit Theorem works. This app was created by Aidan Draper, Christian Wagner, Chris Laskay, and Graham Parker.",
        projectLink: "sts347-final",
        pageLink: "CLT_shiny",
        contentOne: "",
        contentTwo: ""
      }
    ]
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route
              path="/projects"
              render={props => <Projects {...props} state={this.state} />}
            />
            <Route path="/publications" component={Publications} />
            {this.state.projects.map(project => (
              <Route
                path={"/" + project.pageLink}
                render={props => <ProjectPage {...props} project={project} />}
              />
            ))}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

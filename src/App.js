import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Portfolio from "./components/portfolio";
import Publications from "./components/publications";
import ProjectPage from "./components/project-page";
import Hobbies from "./components/hobbies";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

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
        id: 100,
        projectImage: "zachs-esn_keystrokes.png",
        projectTitle: "Neural Keystroke Dynamics",
        projectDesc:
          "Two of my colleagues (Jeremy Speth and Zach Carmichael) at Notre Dame and I built an Echo State Network (ESN) to process raw long-text input from a Keylogger in order to identify users based on their typing features, such as dwell time, and key latency. I was primarily responsible for the Keylogger GUI along with data collection and processing. Our model underperforms the state-of-the-art, but has a better run-time efficiency for a real system. Full credit goes to Zach for building the model and the pretty topology.",
        projectLink: "KeyloggerGUI",
        pageLink: "neural_keystrokes",
        contentOne: (
          <div>
            <p>Project contents coming soon!</p>
          </div>
        ),
        contentTwo: ""
      },
      {
        id: 101,
        projectImage: "peace_cloud.png",
        projectTitle: "3D Hand Gesture Classification",
        projectDesc:
          "For my semester project in Graduate Computer Vision I, I was curious whether or not I could classify 4 different hand gestures using the features from their 3D point clouds generated from SfM, specifically Colmap's algorithm.",
        projectLink: "3DHandClassification",
        pageLink: "hand_classifier",
        contentOne: (
          <div>
            <p>Project contents coming soon!</p>
          </div>
        ),
        contentTwo: ""
      },
      {
        id: 5,
        projectImage: "reactLogo.png",
        projectTitle: "ReactJS Portfolio Site",
        projectDesc:
          "I built a Single Page Application portfolio site using the React JS library, all of which is hosted on Github Pages. I also use the GitHub API to pull current repository information. Prior to this experience, I had very little JavaScript exposure and no ReactJS background. It has been a great experience learning how the React Server DOM helps optimize runtime of Front End UIs. Hope you enjoy the site! Check out my source branch on GitHub if you would like to mimic this style.",
        projectLink: "adraper2.github.io",
        pageLink: "portfolio_site",
        contentOne: (
          <div>
            <p>
              This website explores the use of several React concepts including:
            </p>
            <ul>
              <li>the React Server DOM</li>
              <li>Single Page Application (SPA) design</li>
              <li>the React Router within the App.js script</li>
              <li>parent-child relationships within JSX components</li>
              <li>and more that I definitely am spacing about :)</li>
            </ul>
            <p>
              I was motivated to pursue this project for three reasons: 1) I
              always stunk at Javascript so I thought this would be a great way
              to dive deep into a tool I had avoided. 2) I really wanted to move
              away from drag-and-drop sites. I previously used an Adobe
              portfolio site. It looked nice, but I always felt like I was
              cheating given my Computer Science background. Plus, financially,
              this site makes much more sense. I pay a dollar for the domain and
              host it free on GitHub pages! 3) I would like more exposure to
              heirarchical coding. Most of my projects are script-based so I
              usually do not get to practice software developing habits. This
              was a nice change of pace before starting graduate school at Notre
              Dame.
            </p>
          </div>
        ),
        contentTwo: ""
      },
      {
        id: 1,
        projectImage: "zoom_noise.png",
        projectTitle: "Visual Perceptions of Image Denoising",
        projectDesc:
          "This was a research endeavor at Elon University into college students' visual perceptions of denoised images. In this paper, we apply common inferential kernel filters in the R and python languages, as well as Adobe Lightroom's denoise filter, and compare their effectiveness in removing noise from JPEG images. We ran standard benchmark tests to evaluate each method's effectiveness for removing noise. In doing so, we also surveyed students at Elon University about their opinion of a single filtered photo from a collection of photos processed by the various filter methods. Many scientists believe that noise filters cause blurring and image quality loss so we analyzed whether or not people felt as though denoising causes any quality loss as compared to their noiseless images. Survey scores are compared across filters to evaluate whether there were significant differences in image quality scores received. An analysis of covariance test was run to identify whether or not survey training scores explained any unplanned variation in visual scores assigned by students across the filter methods.",
        projectLink: "Noise_Reduction_Research-STS499",
        pageLink: "noise_reduction",
        contentOne: (
          <p>
            This project started in early September and finished in Febrauary
            with the submission of an article to a research journal. My mentor,
            Dr. Laura Taylor, and I presented our work at two conferences (eUSR
            and UNCG RMSC) during the fall semester and then, submitted a final
            paper to the North Carolina Journal of Mathematics and Statistics in
            February of 2019. I have attached the final presentation for the
            eUSR conference along with more content about the project.
          </p>
        ),
        contentTwo: (
          <div
            style={{
              display: "inline-block",
              width: "100vh",
              height: "50vh"
            }}
          >
            eUSR Submission Video:
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1hjeQlB-VuIrTBa82uusu8zE53PYTCTWK/preview"
            />
          </div>
        )
      },
      {
        id: 2,
        projectImage: "prediction_visual_scam2.png",
        projectTitle: "DISC REU: Marshland Random Forest Model",
        projectDesc:
          "This is an on going research area in the McLachlan Lab at the University of Notre Dame. The goal of this project is to implement a similar methodology implemented by Meghan Vahsen (a graduate student in the lab who classified Tamarisk in the Colorado River Basin) to monitor population abundance of species of sedge and grass in the Chesapeake. In particular, we have data from the Smithsonian Environmental Research Center's marshland plots.",
        projectLink: "DISC_chesapeake",
        pageLink: "DISC_chesapeake",
        contentOne: "",
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
        contentOne: "",
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
        contentOne: (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRXtYmoffGsX78iCQwvOGctLETh-53yK-k6w34RdV04MEpEydBcksWsMT49lC9s5wx_A8Bj3KH0glaT/embed?start=true&loop=true&delayms=30000"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{
              margin: "auto",
              display: "block",
              width: 600,
              height: 380
            }}
            className="embed-content"
          />
        ),
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
        projectTitle: "Central Limit Theorem Shiny Application",
        projectDesc:
          "This was the final project for our STS 347, Statistical Modeling in R, class. For the project, we created a Shiny App within R to show to statistical and non-statistical audiences how the Central Limit Theorem works. This app was created by Aidan Draper, Christian Wagner, Chris Laskay, and Graham Parker.",
        projectLink: "sts347-final",
        pageLink: "CLT_shiny",
        contentOne: (
          <div>
            <br />
            <h2>Introduction</h2>
            <p>
              This was the final project for our STS 347, Statistical Modeling
              in R, class. For the project, we created a Shiny App within R to
              show to statistical and non-statistical audiences how the Central
              Limit Theorem works. This app was created by Aidan Draper,
              Christian Wagner, Chris Laskay, and Graham Parker.
            </p>
            <a href="https://adraper2.shinyapps.io/CentralLimit/">
              Access our app here.
            </a>
            <br />
            <a href="https://github.com/adraper2/sts347-final">
              View our code here.
            </a>
            <br />
            <br />
            <h2>Tutorial</h2>
            <p>Access the app through the provided link.</p>
            <p>
              Choose a distribution you want the data to stem from from the drop
              down selector. The two options are Normal distribution and a
              Skewed distribution.
            </p>
            <h4>For Normal Distribution</h4>
            <p>
              <b>1.</b> Enter a sample mean amount in the input box in the range
              0 to 100. <br />
              <b>2.</b> Enter a sample standard deviation amount in the input
              box in the range 1 to 100. <br />
              <b>3.</b> Pick the sample size of the data using the slider which
              ranges from 1 to 200. This determines the number of observations
              that will be used for each sample. <br />
              <b>4.</b> Pick the number of times to repeat the sampling using
              the slider which ranges from 1 to 2000. This determines the number
              of times that the app will randomly choose a group of numbers as a
              sample. The numbers chosen for each sample are based on the
              distribution of the graph, the mean, the standard deviation, and
              the sample size.
            </p>
            <img
              src={require(`./images/p1.png`)}
              className=" rounded border"
              style={{ width: "100%" }}
            />
            <h4>For Skewed Distribution</h4>
            <p>
              <b>1.</b> Choose either a right or the left skew for your
              distribution by clicking one of the two different buttons. <br />
              <b>2.</b> Change the severity of the skew using the slider which
              ranges from Less (1) to More (3). <br />
              <b>3.</b> Pick the sample size of the data using the slider which
              ranges from 1 to 200. This determines the number of observations
              that will be used for each sample. <br />
              <b>4.</b> Pick the number of times to repeat the sampling using
              the slider which ranges from 1 to 2000. This determines the number
              of times that the app will randomly choose a group of numbers as a
              sample. The numbers chosen for each sample are based on the
              distribution of the graph, the mean, the standard deviation, and
              the sample size.
            </p>
            <img
              src={require(`./images/p2.png`)}
              className=" rounded border"
              style={{ width: "100%" }}
            />
            <h4>Navigate Tabs</h4>
            <p>
              <b>1.</b> Click on the Population tab above the histogram to view
              a histogram of the distribution of the population that the samples
              will be drawn from, based on the values you selected. <br />
              <b>2.</b> Click on the Results tab above the histogram to view
              what the sample histogram actually looks like based on the values
              you selected. This histogram will have a line drawn on it, which
              represents an estimate of the probability of occurrence of each
              possible outcome. <br />
              <b>a)</b> Under the histogram in the Results tab is the mean of
              the sample means. This is found by taking the mean of each sample
              and then taking the mean of all of the sample means. <br />
              <b>b)</b> Click on the answer button to view an insight about the
              distribution. Click again, to hide it.
            </p>
            <img
              src={require(`./images/p3.png`)}
              className=" rounded border"
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <h2>Statistical Guide</h2>
            <p>
              This applet allows you to interactively explore the Central Limit
              Theorem (CLT) and the importance of proper sample sizes when
              collecting samples for research, surveys, school projects, etc.
              The CLT states that if repeated samples are taken from a
              population, the distribution of these sample means will be
              approximately normal for all large sample sizes (typically greater
              than 30). To fully understand what that statement means, there are
              a few base concepts that you must know first. These include:
              random sampling, sample size, mean, standard deviation, sampling
              distribution, and normal versus skewed distributions. The concepts
              will be defined below, and explained in the context of the Central
              Limit Theorem.
            </p>
            <h4>Random Sampling</h4>
            <p>
              When collecting data from a population, each individual
              observation should have equal probability of being selected into a
              sample. This method of sampling reduces the possibility of bias
              being introduced into the study. Without random sampling, the
              sample data may be biased because selected observations may have
              very similar values. When collecting a large number of samples, it
              is important to randomly select all samples to avoid bias.
            </p>
            <h4>Sample Size</h4>
            <p>
              The sample size is the number of observations to include in a
              statistical sample. When trying to make inferences about about a
              group or population from a sample, the sample size can help to
              determine whether how closely we can predict what will happen in
              the population. Larger samples are better than small samples
              because they give more reliable results since the sample is more
              likely to be representative of the population. Sample size is a
              key component of the Central Limit Theorem, since it only holds
              true for large samples sizes (greater than 30).
            </p>
            <h4>Mean</h4>
            <p>
              The average of a set of data. The mean is calculated by finding
              the sum of all observations and dividing by the total number of
              observations. In statistics, sample means are calculated in order
              to make a prediction of the population mean. In the CLT, the mean
              is calculated for each of the repeated samples. The distribution
              of all these sample means is said to be approximately normal by
              the CLT.
            </p>
            <h4>Standard Deviation</h4>
            <p>
              Describes the amount of variation in your data set. More
              specifically, it tells us on average how far our observations are
              from the mean. A small standard deviation means that the data is
              tightly grouped around the mean whereas a large standard deviation
              (>3) tells us our data is very spread out and far from the mean.
              Data sets with large standard deviations are more likely to have
              unreliable prediction of the mean. The standard deviation is an
              important concept in the CLT because it shows that larger sample
              sizes have less variability (smaller standard deviations) than
              smaller sample sizes.
            </p>
            <h4>Sampling Distribution</h4>
            <p>
              The sampling distribution is a distribution of a statistic, in
              this case the mean, which is obtained by taking a large number of
              samples from a population. This probability distribution tells us
              the relative frequency of mean values calculated for each sample.
              The Central Limit Theorem states that when repeated samples are
              taken from a population, the (sampling) distribution of these
              sample means will be approximately normal.
            </p>
            <h4>Normal versus skewed distributions</h4>
            <p>
              The normal distribution, also commonly referred to as the
              “bell-curve” is a distribution that is found in many situations
              and describes the relative frequency of data. This distribution
              models “normal” symmetrical data where we expect the observations
              to be evenly distributed around the average or mean of the data.
              This distribution is very useful in business, statistics, and
              other fields because the majority of data follows this bell-shaped
              pattern where the majority of values fall around the mean.
            </p>
            <p>
              Skewed data is when data is clustered towards one end of the scale
              of values. For example when looking at the mean annual income of
              employees in a large corporation, the majority of incomes will be
              clustered on the lower end of income values. Since there are
              significantly fewer employees with high annual mean incomes the
              distribution will be skewed to the left. This skew influences the
              mean of the data. In terms of the example above, the small amount
              of employees with high mean incomes pulls the mean income value up
              the scale, despite the majority of the data being clustered around
              the low-end. If you are not careful, skewed data can cause you to
              make wrong predictions about the true mean of the population of
              interest.
            </p>
            <p>
              It is important to know the difference between normal and skewed
              distributions to understand why the CLT shows that the sampling
              distribution of a skewed population is normal. This is related to
              sample size and standard deviation. As stated in the sections
              above, larger sample sizes have less variability and therefore the
              sample means are less influenced by extreme values compared to the
              sample means of small sample sizes. This is why the sampling
              distribution of means from skewed data is still normal or
              bell-shaped when using large samples.{" "}
            </p>
            <h4>Using the App to Explore the Central Limit Theorem</h4>
            <p>
              Now that you are familiar with these concepts, it is time to see
              them in action through the app. To get started, see the included
              tutorial. Remember, that the Central Limit Theorem tells us that
              if repeated samples are taken from a population (normal or
              skewed), the distribution of these sample means will be
              approximately normal for all large sample sizes (typically greater
              than 30). Using the app, you can visualize how this theorem holds
              true for the normal and skewed distributions when the sample size
              is greater than 30, and fails when the sample size is smaller than
              30. This will be apparent when choosing a small sample size for
              the skewed option because the sampling distribution of the skewed
              population will not be normal, but as soon as you increase the
              sample size over 30 it will return to normal, thus showing the CLT
              in action. Furthermore you can explore how changing the standard
              deviation (variability) affects the sampling distribution when
              using small sample sizes. You will see that the more variability
              there is in your data, the less accurate the sampling distribution
              can predict the mean of the population. These are just a few
              suggestions on where to start, but if feel like you have the hang
              of it, try predicting when the CLT will hold true for differing
              values of samples size, mean, sd, etc.
            </p>
          </div>
        ),
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
            <Route path="/hobbies" component={Hobbies} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

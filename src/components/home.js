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
            <div className="aligned-container">
              <div className="align" id="home_prof">
                <code>Data Engineer | Software Developer Hobbyist</code>
              </div>
            </div>
          </div>
          <br />
          <p>
            <code>Hello, world!</code>
          </p>
          <p>
            <b>Who am I?</b> I am a data engineer for 
            <a href="https://wework.com"> WeWork</a> and I maintain our internal People data cloud warehouse. Formerly, I worked at an edtech Series A startup as a data engineer and content designer. For education, I attended Elon University to earn degrees in Computer Science and Statistics. After that, I spent two 
            years in a PhD pogram researching the application of neural networks for
            multiview scene reconstructions in a Computer Vision lab 
            <a href="https://cvrl.nd.edu/"> (CVRL)</a> at Notre Dame.
          </p>
          <p>
            <b>What have I been up to?</b> I am passionate about problem solving in data settings and building open-source software for these solutions. More recently, I have been enjoying exploring modern applications of database design and data app architectures as well as building highly-scalable pipelines. I have a vested interest in FLOSS projects and data transparency. In my last job, I got to work on an open-source <a href="https://gitlab.com/frame-00/00-api">OLAP and API tool</a> (in Django) that let you use YAML to query models database that become deployable and schedule-able workers. It used the Django dunder language to denormalize schemas.

<br /><br />Prior to data engineering, I worked with depth estimation and segmentation deep learning architectures in Tensorflow and PyTorch. I have experience in training self-supervised depth estimation models. In addition, I have transfer-learned multiple models, including Inceptionv3, Mask R-CNN, SfM-Net, Monodepth, and Monodepth 2. I also enjoy exploring random datasets with a statistics lens and wish to get into data consulting in the future. 
          </p>
          <p>
            <b>What am I interested in?</b> I follow the premier league (YNWA)
            and play on a few local soccer teams in South Bend. I was an avid cyclist (less so now) and 
            used to race with the ND Cycling Team. I do my best to follow other sports, like college football 
            and basketball, but I cannot say that I always keep up-to-date. In New York, I loved to Kayak and Hike.
            I have a 4 year old Aussie named Chance, who is super loveable but also VERY energetic.
          </p>
          
          <hr />
          <br />
          <div className="aligned-container">
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
          <br />
          </div>
          <br />
          Note that this website has unfinished components:
          <ul>
            <li>
              I am still building out my projects, blog, and hobbies content (two years later). But, I recently added markdown support, which should greatly increase my willingness to update content! 
            </li>
            <li>Adding py scripts and bash commands to make projects, hobbies, and blogs easier to create. I fully acknowledge how clunky my current system is.</li>
          </ul>
          <p>
            If you are interested in the code for this website, checkout my
            GitHub repo{" "}
            <a href="https://github.com/adraper2/adraper2.github.io/tree/source/src">
              here
            </a>
            .
          </p>
          <br />

        </div>
        <br />
      </main>
    );
  }
}

export default Home;

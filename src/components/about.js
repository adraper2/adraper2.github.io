import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main className="main-container">
          <br />
          <br />
          <p>
            <code>Hello, world!</code>
          </p>
          <p>
            <b>Who am I?</b> I am a data engineer for 
            <a href="https://wework.com"> WeWork</a> and maintain our People data cloud warehouse. Formerly, I worked at an edtech Series A startup as a data engineer and content designer. For education, I attended Elon University to earn degrees in Computer Science and Statistics. I spent two 
            years in a PhD pogram researching the application of neural networks for
            multiview scene reconstructions in a Computer Vision lab 
            <a href="https://cvrl.nd.edu/"> (CVRL)</a> at Notre Dame.
          </p>
          <p>
            <b>What have I been up to?</b> I am passionate about problem solving in data settings and building open-source software for these solutions. More recently, I have been enjoying exploring modern applications of database design and data app architectures. I spend most of my time building highly-scalable pipelines. I have a vested interest in FLOSS projects and data transparency. In my last role, I was a developer for an open-source <a href="https://gitlab.com/frame-00/00-api">OLAP and API tool</a> (in Django). 
<br /><br />Prior to data engineering, I worked with depth estimation and segmentation deep learning architectures in Tensorflow and PyTorch. I have experience in training self-supervised depth estimation models. In addition, I have transfer-learned multiple models, including Inceptionv3, Mask R-CNN, SfM-Net, Monodepth, and Monodepth 2. I also enjoy exploring random datasets with a statistics lens and wish to get into data consulting in the future. 
          </p>
          <p>
            <b>What am I interested in?</b> I follow the premier league (YNWA)
            and enjoy playing pickup soccer on the weekends. I was an avid cyclist (less so now) and 
            used to race with the ND Cycling Team. I do my best to follow other sports, like college football 
            and basketball, but I cannot say that I always keep up-to-date. In New York, I loved to Kayak and Hike.
            I have a 6 year old Aussie named Chance, who is super loveable but also VERY energetic.
          </p>
          
          <hr />
          <p>
          <b>What about this site?</b> I recently added markdown support in the hopes that it will increase my willingness to update this site. The next thing on my agenda is to build out CLI commands (maybe in rust) to make projects, hobbies, and blogs in a friendlier fashion. I fully acknowledge how clunky my current system is. Right now, I have some opinionated use of IDs to organize content (see projects). In addition, you must create both a chunk of json and a markdown file in the current location in order to create new content. It feels less than ideal when the point should be to focus on the actual content creation.                    </p>
          <p>
            If you are interested in the code for this website, checkout my
            GitHub repo{" "}
            <a href="https://github.com/adraper2/adraper2.github.io/tree/source/src">
              here
            </a>
            .
          </p>
      </main>
    );
  }
}

export default About;


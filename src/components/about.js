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
             <b>Who am I?</b> I am a Software Engineer currently on a career break but I 
             am always interested in hearing about new and exciting opportunities! Formerly, 
             I was a Data Engineer at Restaurant365 working on building out their first cloud 
             warehouse. I have worked at WeWork, maintaining their People data cloud warehouse, 
             and an edtech startup building data pipelines and a backend OLAP application in Django. For education, 
             I attended Elon University to earn degrees in Computer Science and Statistics. I spent two 
             years in a PhD pogram researching the application of neural networks for multiview scene reconstructions 
             in a Computer Vision Lab <a href="https://cvrl.nd.edu/"> (CVRL)</a> at Notre Dame.
          </p>
          <p>
            <b>What have I been up to?</b> I am taking time off of computer science. From time-to-time, I am still 
        programming but only as a hobbyist. I am currently getting a ton of enjoyment working in the coffee space 
        and seeing what experimenting I can do in that field. Previously, I have been passionate about problem solving 
        in data settings and building open-source software for these solutions. I have greatly enjoyed advocating for and building out
        databases for internal enterprise software data collection. In the past, I have enjoyed 
        exploring modern applications of database design and data app architectures. I spent most 
        of my time building highly-scalable pipelines. I have a vested interest in FLOSS projects 
        and data transparency. In a previous role, I was a developer for an open-source  
        <a href="https://gitlab.com/frame-00/00-api">OLAP and API tool</a> written in python using Django. 
<br /><br />Prior to data engineering, I worked with depth estimation and segmentation deep learning architectures in Tensorflow and PyTorch. I have experience in training self-supervised depth estimation models. In addition, I have transfer-learned multiple models, including Inceptionv3, Mask R-CNN, SfM-Net, Monodepth, and Monodepth 2. I also enjoy exploring random datasets with a statistics lens and wish to get into data consulting in the future. 
          </p>
          <p>
            <b>What am I interested in?</b> I have a love for all things drink-related. I am currently on a
            career break and exploring my love for coffee while working at a cafe and roastery. In the past,
            I have worked at a brewery and even gained my level 1 cicerone ceritificaiton. I follow the premier 
            league (YNWA) and enjoy playing pickup soccer during the week. I am an avid cyclist and 
            used to race with the ND Cycling Team. I also am a "weekend warrior" boulderer. I do my best to follow 
            other sports, like college football and basketball, but I cannot say that I always keep up-to-date. 
            In New York, I loved to Kayak and Hike. I have an 8 year old Aussie named Chance, who is super loveable 
            but also VERY energetic.
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


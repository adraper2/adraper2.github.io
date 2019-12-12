import React, { Component } from "react";
import firstpaper from "../content/image_denoising_survey_manuscript_draper_taylor.pdf";
import reuPoster from "../content/final_poster-aidan_draper.pdf";
import denoisePres from "../content/draper_sts499_research_pres.pdf";

class Publications extends Component {
  state = {
    articles: [
      {
        id: 1,
        title: "Coming soon"
      }
    ],
    presentations: [
      {
        id: 1,
        title: "Investigating Image Quality Loss",
        authors: "Laura L. Taylor",
        kind: "oral presentation",
        conference:
          "UNC, Greensboro Regional Mathematics and Statistics Conference",
        location: "Greensboro, NC,",
        date: "November 2018",
        link: denoisePres
      },
      {
        id: 2,
        title:
          "Investigating image quality loss while using statistical methods to filter grayscale Gaussian noise",
        authors: "Laura L. Taylor",
        kind: "video presentation",
        conference: "Electronic Undergraduate Statistics Research Conference",
        location: "",
        date: "November 2018",
        link: "https://www.causeweb.org/usproc/eusrc/2018/virtual-posters/3"
      },
      {
        id: 3,
        title:
          "Classifying Marshland Plant Species by Processing Light Reflectance in Satellite Images",
        authors: "Luke Onken and Jason McLachlan",
        kind: "poster presentation",
        conference: "University of Notre Dame Summer Research Symposium",
        location: "Notre Dame, IN,",
        date: "July 2018",
        link: reuPoster
      }
    ]
  };
  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h4>Articles:</h4>
        <hr className="hr-class" />
        {this.state.articles.map(article => (
          // start showing article stuff
          <p>
            {article.id}. {article.authors}. {article.title}.{" "}
            <i>{article.conference}</i>. {article.date}.
            <a
              className="project_tag"
              href={article.link}
              style={{ paddingLeft: 5 }}
            >
              [paper]
            </a>
          </p>
        ))}
        <h4>Presentations:</h4>
        <hr className="hr-class" />
        {this.state.presentations.map(pres => (
          //start showing pres stuff
          <p>
            {pres.id}. "{pres.title}," with {pres.authors}, {pres.kind} at the{" "}
            <i>{pres.conference}</i>, {pres.location} {pres.date}.
            <a
              className="project_tag"
              href={pres.link}
              style={{ paddingLeft: 5 }}
            >
              [presentation]
            </a>
          </p>
        ))}
      </div>
    );
  }
}

export default Publications;

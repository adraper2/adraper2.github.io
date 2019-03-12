import React, { Component } from "react";

class Publications extends Component {
  state = {
    articles: [
      {
        id: 1,
        title:
          "A survey on the visual perceptions of gaussian noise filtering on photography",
        authors: "Aidan J. Draper and Laura L. Taylor",
        conference: "North Carolina Journal of Mathematics and Statistics",
        date: "Under Review",
        link:
          "https://drive.google.com/file/d/1IGt0naMDSIeAdVNg4FpDtcW5Uj9f1M4h/view?usp=sharing"
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
        link:
          "https://github.com/adraper2/Noise_Reduction_Research-STS499/blob/master/draper_sts499_research_pres.pdf"
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
        link:
          "https://docs.google.com/presentation/d/10vzUYmJU-lYcq1PBKg6wO854jVhb3UXfOR7g09KFPvc/edit?usp=sharing"
      }
    ]
  };
  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h4>Journal Articles</h4>
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
        <h4>Presentations</h4>
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

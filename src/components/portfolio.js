import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

var offset = 80;

class Portfolio extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="container" id="portfolio-container">
        <Scrollspy
          items={["education", "work-experience", "skills", "publications"]}
          currentClassName="is-current "
          className="sidebar-nav"
          offset={-10}
        >
          <li>
            <a
              className="list-group-item list-group-item-action"
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="list-group-item list-group-item-action"
              href="#work-experience"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              className="list-group-item list-group-item-action"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="list-group-item list-group-item-action"
              href="#publications"
            >
              Publications
            </a>
          </li>
        </Scrollspy>
        <div className="portfolio-info-container">
          <h3>This is a work in progress!</h3>

          <div className="portfolio-section">
            <section id="education">
              <b>Education</b>
            </section>
            <p className="date">Starting&#58; August 2019</p>
            <p>
              University of Notre Dame
              <br />
              Ph.D., Computer Science and Engineering
            </p>
            <p className="date">Expected Graduation&#58; May 2019</p>
            <p>
              Elon University
              <br />
              B.S., Double major in Computer Science and Statistics
            </p>
          </div>
          <div className="portfolio-section">
            <section id="work-experience">Work Experience</section>
            <p>
              Lorem ipsum dolor sit amet, in nec vivendo percipitur. In nec
              paulo volumus, et alii solum qui. At usu cibo blandit efficiendi.
              Causae ornatus electram eam ea, ut mel nibh facer scriptorem. Has
              ne iriure nusquam intellegat. Eam ipsum insolens scripserit id, no
              minim tempor omnium his. Ignota comprehensam eos ea, harum meliore
              id nam. Recteque consetetur incorrupte vis eu, eos scripta
              deserunt repudiandae te. Eam omnes fabellas ut, debitis
              comprehensam necessitatibus has at. Novum alterum ornatus est in,
              eam ad nostrud blandit. Probo prompta vivendo pri et, stet animal
              eos no. Lorem ipsum dolor sit amet, in nec vivendo percipitur. In
              nec paulo volumus, et alii solum qui. At usu cibo blandit
              efficiendi. Causae ornatus electram eam ea, ut mel nibh facer
              scriptorem. Has ne iriure nusquam intellegat. Eam ipsum insolens
              scripserit id, no minim tempor omnium his. Ignota comprehensam eos
              ea, harum meliore id nam. Recteque consetetur incorrupte vis eu,
              eos scripta deserunt repudiandae te. Eam omnes fabellas ut,
              debitis comprehensam necessitatibus has at. Novum alterum ornatus
              est in, eam ad nostrud blandit. Probo prompta vivendo pri et, stet
              animal eos no.
            </p>
          </div>
          <div className="portfolio-section">
            <section id="skills">Skills</section>
            <p>
              Lorem ipsum dolor sit amet, in nec vivendo percipitur. In nec
              paulo volumus, et alii solum qui. At usu cibo blandit efficiendi.
              Causae ornatus electram eam ea, ut mel nibh facer scriptorem. Has
              ne iriure nusquam intellegat. Eam ipsum insolens scripserit id, no
              minim tempor omnium his. Ignota comprehensam eos ea, harum meliore
              id nam. Recteque consetetur incorrupte vis eu, eos scripta
              deserunt repudiandae te. Eam omnes fabellas ut, debitis
              comprehensam necessitatibus has at. Novum alterum ornatus est in,
              eam ad nostrud blandit. Probo prompta vivendo pri et, stet animal
              eos no. Lorem ipsum dolor sit amet, in nec vivendo percipitur. In
              nec paulo volumus, et alii solum qui. At usu cibo blandit
              efficiendi. Causae ornatus electram eam ea, ut mel nibh facer
              scriptorem. Has ne iriure nusquam intellegat. Eam ipsum insolens
              scripserit id, no minim tempor omnium his. Ignota comprehensam eos
              ea, harum meliore id nam. Recteque consetetur incorrupte vis eu,
              eos scripta deserunt repudiandae te. Eam omnes fabellas ut,
              debitis comprehensam necessitatibus has at. Novum alterum ornatus
              est in, eam ad nostrud blandit. Probo prompta vivendo pri et, stet
              animal eos no.
            </p>
          </div>
          <div className="portfolio-section">
            <section id="publications">Publications</section>
            <p>
              Lorem ipsum dolor sit amet, in nec vivendo percipitur. In nec
              paulo volumus, et alii solum qui. At usu cibo blandit efficiendi.
              Causae ornatus electram eam ea, ut mel nibh facer scriptorem. Has
              ne iriure nusquam intellegat. Eam ipsum insolens scripserit id, no
              minim tempor omnium his. Ignota comprehensam eos ea, harum meliore
              id nam. Recteque consetetur incorrupte vis eu, eos scripta
              deserunt repudiandae te. Eam omnes fabellas ut, debitis
              comprehensam necessitatibus has at. Novum alterum ornatus est in,
              eam ad nostrud blandit. Probo prompta vivendo pri et, stet animal
              eos no. Lorem ipsum dolor sit amet, in nec vivendo percipitur. In
              nec paulo volumus, et alii solum qui. At usu cibo blandit
              efficiendi. Causae ornatus electram eam ea, ut mel nibh facer
              scriptorem. Has ne iriure nusquam intellegat. Eam ipsum insolens
              scripserit id, no minim tempor omnium his. Ignota comprehensam eos
              ea, harum meliore id nam. Recteque consetetur incorrupte vis eu,
              eos scripta deserunt repudiandae te. Eam omnes fabellas ut,
              debitis comprehensam necessitatibus has at. Novum alterum ornatus
              est in, eam ad nostrud blandit. Probo prompta vivendo pri et, stet
              animal eos no. Lorem ipsum dolor sit amet, in nec vivendo
              percipitur. In nec paulo volumus, et alii solum qui. At usu cibo
              blandit efficiendi. Causae ornatus electram eam ea, ut mel nibh
              facer scriptorem. Has ne iriure nusquam intellegat. Eam ipsum
              insolens scripserit id, no minim tempor omnium his. Ignota
              comprehensam eos ea, harum meliore id nam. Recteque consetetur
              incorrupte vis eu, eos scripta deserunt repudiandae te. Eam omnes
              fabellas ut, debitis comprehensam necessitatibus has at. Novum
              alterum ornatus est in, eam ad nostrud blandit. Probo prompta
              vivendo pri et, stet animal eos no. Lorem ipsum dolor sit amet, in
              nec vivendo percipitur. In nec paulo volumus, et alii solum qui.
              At usu cibo blandit efficiendi. Causae ornatus electram eam ea, ut
              mel nibh facer scriptorem. Has ne iriure nusquam intellegat. Eam
              ipsum insolens scripserit id, no minim tempor omnium his. Ignota
              comprehensam eos ea, harum meliore id nam. Recteque consetetur
              incorrupte vis eu, eos scripta deserunt repudiandae te. Eam omnes
              fabellas ut, debitis comprehensam necessitatibus has at. Novum
              alterum ornatus est in, eam ad nostrud blandit. Probo prompta
              vivendo pri et, stet animal eos no.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

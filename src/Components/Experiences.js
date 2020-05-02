import React from "react";
import data from "../store/settings";
import Slide from "react-reveal/Slide";

function Experiences() {
  const education = data.education.map(educations => {
    return (
      <Slide up key={educations.uniqueKey}>
        <div className="education-item">
          <h4>
            {educations.specialization}
            <a href={educations.url}>{educations.universityName}</a>
          </h4>
          <p className="year">{educations.years}</p>
          <p>{educations.description}</p>
        </div>
      </Slide>
    );
  });

  const work = data.work.map(works => {
    return (
      <Slide up key={works.uniqueKey}>
        <div className="work-item">
          <h4>
            {works.specialization}
            <a href={works.url}>{works.universityName}</a>
          </h4>

          <p className="year">{works.years}</p>

          <span className="small">Responsability:</span>
          <ul className="work-responsability">
            <li>
              <i className="fa fa-circle mr-2"></i>
              {works.responsability}
            </li>
          </ul>
        </div>
      </Slide>
    );
  });
  return (
    <React.Fragment>
      <div className="divider div-transparent div-dot"></div>
      <section className="overlay" id="experiences">
        <div className="education grid-container-experience">
          <div className="cards-education">
            <h3>
              <span className="highlightWhite">Education</span>
            </h3>
            {education}
          </div>

          <div className="work cards-work">
            <h3>
              <span className="highlightWhite">Work Experience</span>
            </h3>
            {work}
          </div>
        </div>
      </section>
      <div className="divider div-transparent div-dot"></div>
    </React.Fragment>
  );
}

export default Experiences;

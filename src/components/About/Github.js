import React from "react";

import { Row } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Achievements</strong>
      </h1>
      <ul>
                <li className="about-activity">
              <ImPointRight /> I worked as a Java developed where I worked on many Java projects and applications.
            </li>
            <li className="about-activity">
              <ImPointRight /> Me and my team developed a project Validify which got selected for Karnataka Govt. funding.
            </li>
            <li className="about-activity">
              <ImPointRight /> Participated in college level hackathons and got recognized and appreciated.
            </li>
          </ul>
    </Row>
  );
}

export default Github;

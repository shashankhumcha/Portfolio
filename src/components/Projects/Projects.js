import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Validify"
              description="Personal application to verify product and check if the recieved product is counterfeit or authentic build with Next.js, Blockchain,
               and Hard Hat. Have features which allows user to scan the QR code, and manufacturers to add products that they produce."
               demoLink="https://validify-phi.vercel.app/"
               ghlink="https://github.com/shashankhumcha/Validify.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TaskTrail"
              description="My personal project build with Next.js, React.Js and Css which is useful to keep track of tasks by ordering them in Todo, In progress and Done status using Next.js. supports google login and deletion and updation of tasks. Also this project is cross compatible."
              ghLink="https://github.com/shashankhumcha/task_manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resto"
              description="Online food review and ordering website build with HTML, CSS and JavaScript. Application through which users can read reviews of food and restraunt and can order food through the same. Very interactive and clean looking website with amazing UI and experience."
              ghLink="https://github.com/shashankhumcha/Resto.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pay Pulse"
              description="Coorporate payment application through which companies can pay its employees whithout any hazzle. Made using HTML, CSS, JavaScript. This application provides features to add and delete managers, employees and departments. Also made the project resposive so that it is cross compatible with mobile and desktop."
              ghLink="https://github.com/shashankhumcha/Payroll_Management.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Attend Ease"
              description="Using 'Android Studio' I developed an application for taking students attendence through android application. This contains features like adding and deleting teacher,class and student and mark present and absent for that date."
              ghLink="https://github.com/shashankhumcha/Android_Attenence_Application.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

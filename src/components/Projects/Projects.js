import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FPT Quizz"
              description="A website facilitating the creation, editing, management of topics and questions,
                            tailored for educators to orchestrate exams, oversee results, and enable student participation"
              frontEnd="JSP, CSS, JavaScript for Front-End"
              backEnd="Java, Servlet, SQL Server for Back-End"
              position="Position: All positions"
              ghLink="https://github.com/ArtDS02/Quiz5-7"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube download service"
              description="The website allows downloading videos from YouTube to your computer by entering the link"
              frontEnd="ReactJS, CSS, bootstrap for Front-End"
              backEnd="NodeJS, python for Back-End"
              position="Position: All positions"
              ghLink="https://github.com/ArtDS02/Y2mate-by-Denne"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Games"
              description="Summarize a few childhood games for everyone to experience such as: 
              bau cua tom ca, 
              guessing lucky numbers, whack-a-mole, tank..."
              frontEnd="ReactJS, CSS, bootstrap for Front-End"
              backEnd="NodeJS"
              position="Position: All positions"
              ghLink="https://github.com/ArtDS02/LuckyGame-React.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Coffee Shop"
              description="A web for coffee shop, allow user create and custom their own product."
              frontEnd="ReactJS, CSS, bootstrap for Front-End"
              backEnd="Spring boot, SQL server"
              position="Position: All positions"
              ghLink="https://github.com/ArtDS02/FE_SouCoffee"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

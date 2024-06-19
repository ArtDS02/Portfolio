import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Nguyen Tien Thinh </span>
            from <span className="blue"> Da Nang city, Viet Nam.</span>
            <br />
            I am currently studying at FPT University Da Nang.
            <br />
            I have participated in an internship program at FPT Software Da Nang with quite good results 
            and wish to have the opportunity to learn more in other professional environments. 
            Along with the knowledge gained during my studies, I believe I can complete the tasks assigned well.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Edit video as a freelancer editor
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

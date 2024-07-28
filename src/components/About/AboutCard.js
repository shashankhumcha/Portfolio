import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!!!, I am <span className="purple">Shashank S </span>
            I'm from from <span className="purple"> Shivamogga </span>India.
            <br />
            I am currently looking for a <span className="purple">Job!!!.</span>
            <br />
            I have completed my Bachelors (B.E) in Computer Science <br/>
            at Canara Engineering College.
          
            <br />
            <br />
            Apart from coding, <span className="purple">I love to do!</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Getting lost in a good book.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          
            "Don't wait to do good things till <span className="purple">TOMORROW!"{" "}</span>
          <p></p>
          <footer className="blockquote-footer">Shashank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

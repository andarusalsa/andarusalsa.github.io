import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import IDNFlag from "../assets/img/IDN Flag.png";
import USFlag from "../assets/img/US Flag.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact">
      <Container className="container">
        <Row>
        <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
        <div>
          <h2>Check My Resume</h2>
          <div className="download-buttons">
            <button className="download-button">
              Download CV <img src={USFlag} alt="US Flag" style={{ width: "20px", height: "auto"}} />
            </button>
            <button className="download-button">
              Download CV <img src={IDNFlag} alt="Indonesia Flag" style={{ width: "20px", height: "auto" }} />
            </button>
          </div>
        </div>

        <div className="section">
          <h3>Summary</h3>
          <div class="item-with-line">
            <span class="line-bullet-summary"></span>
            <div>
              <h4>Andaru Putri Salsabila</h4>
              <p>
                A recent graduate of Informatics Engineering seeking to use skills and knowledge in the IT role. Experienced and proficient in an assortment of technologies, including PHP, HTML, and CSS programming for web development, Python related to data analytics, software documentation, and expertise in using the Laravel and CodeIgniter frameworks to create dynamic and responsive websites. Able to effectively self-
              </p>
            </div>
            </div>
        </div>

          <div className="section">
            <h3>Internship Experience</h3>
            <div class="item-with-line">
              <span class="line-bullet"></span>
              <div>
                <h4>ASSISTANT LECTURER OF INFORMATION TECHNOLOGY PROJECT COURSE</h4>
                <p>Sep 2022 - Dec 2022</p>
                <p>Institut Teknologi Sumatera, South Lampung, Indonesia</p>
                <h4>IT DIVISION STAFF DATA CENTER SUBDIVISION OF PEMIRA PMK ITERA</h4>
                <p className="date">Jan 2022 - Feb 2022</p> <p>Institut Teknologi Sumatera, South Lampung, Indonesia</p>
                <ul className="ul">
                  <li>Managed data center operations and maintenance.</li>
                  <li>Assisted in the development of IT infrastructure for events.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Education</h3>
            <div className="item-with-line">
              <span class="line-bullet-education"></span>
              <div>
                <h4>BACHELOR OF INFORMATICS ENGINEERING</h4>
                <p className="date">2018 - 2022</p>
                <p>Institut Teknologi Sumatera, South Lampung, Indonesia</p>
              </div>
            </div>
          </div>
        </Col>
        </Row>
      </Container>
    </section>
  )
}

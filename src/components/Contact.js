import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import IDNFlag from "../assets/img/IDN Flag.png";
import USFlag from "../assets/img/US Flag.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container className="container">
        <Row>
        <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" style={{ width: '100%' }}/>
              }
            </TrackVisibility>
        </Col>
        <Col size={12} md={7}>
        <div>
          <h2>Check My Resume</h2>
          <div className="download-buttons">
            <a href="https://drive.google.com/file/d/1J9DxOLq3fFi50WawyUZKHwAzKxgMa02h/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="download-button"> 
                Download CV <img src={USFlag} alt="US Flag" style={{ width: "20px", height: "auto"}} />
              </button>
            </a>
            <a href="https://drive.google.com/file/d/1hWBkAwEdx_UP7d7EYPhh8E-9kNnxTOXy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="download-button">
                Download CV <img src={IDNFlag} alt="Indonesia Flag" style={{ width: "20px", height: "auto" }} />
              </button>
            </a>
          </div>
        </div>

        <div className="section">
          <h3>Summary</h3>
          <div class="item-with-line">
            <span class="line-bullet-summary"></span>
            <div>
              <h4>Andaru Putri Salsabila</h4>
              <p>
              A recent graduate of Informatics Engineering passionate about UI/UX Design, Product Design, and Front-End Engineering. Proficient in designing user-centric interfaces using Figma, building responsive web applications with React.js and Next.js, and integrating data-driven insights through Python. Eager to deliver innovative digital solutions by combining creativity and technical expertise.
              </p>
            </div>
            </div>
        </div>

          <div className="section">
            <h3>Internship Experience</h3>
            <div class="item-with-line">
              <span class="line-bullet"></span>
              <div>
                <h4>Product Developer</h4>
                <p>Agu 2022 - Des 2022</p>
                <p>Tim Tokoneksi (Startup Campus - Studi Independen Kampus Merdeka)</p>
                <ul className="ul">
                  <li>
                    Collaborated with the team to create interactive prototypes tested by over 10 users, achieving a SUS score of 82.5 with an "excellent" rating.
                  </li>
                  <li>
                    Successfully won 2nd place in the Final Showcase for the innovative product design, which received recognition from the judging panel for its relevance and potential.
                  </li>
                </ul>
                <h4>UI/UX Designer Intern</h4>
                <p className="date">Jun 2022 - Aug 2022</p> 
                <p>CV. Yanka Kreatif Solusi </p>
                <ul className="ul">
                  <li>
                    Collectd and analyzed user data to identify their needs and behavior patterns, providing insights as the foundation for product design.
                  </li>
                  <li>
                    Created wireframes, mockups, and prototypes using Figma, effectively communicating design ideas to developers and stakeholders.
                  </li>
                </ul>
                <h4>Laboratory Teaching Assistant</h4>
                <p className="date">Aug 2020 - Dec 2020</p> 
                <p>Institut Teknologi Sumatera </p>
                <ul className="ul">
                  <li>
                    Guided over 60 students in understanding the materials for Computer and Software Introduction.
                  </li>
                  <li>
                    Recorded student attendance with 100% accuracy using an organized reporting system.
                  </li>
                  <li>
                    Evaluated and recorded the grades of over 60 daily programming assignments written in C++, assessing logical accuracy, code efficiency, and adherence to programming standards.
                  </li>
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
                <p className="date">2019 - 2024</p>
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

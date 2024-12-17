import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "TOKONEKSI",
      description: "Product Design",
      imgUrl: projImg1,
      url:"https://my-project.framer.website/"
    },
    {
      title: "LOGO",
      description: "UI Design",
      location:"(Studi Independen, Startup Campus)",
      imgUrl: projImg2,
      url:"https://my-project.framer.website/re-design-trip-app"
    },
  ];
  const projectsFE = [
    {
      title: "Sistem Informasi Stok Barang",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg3,
      url:"https://github.com/Ihza-Fajrur/Sistem-Informasi-Management-Stok"
    },
    {
      title: "Perancangan Antarmuka Website",
      description: "Next.JS, TypeScript", 
      imgUrl: projImg4,
      url:"https://github.com/andarusalsa/Tugas-Akhir"
    },
    {
      title: "Personal Portfolio",
      description: "React.JS, JavaScript",
      imgUrl: projImg5,
      url:"https://github.com/andarusalsa/personal-portfolio"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Experience includes professional projects, academic assignments, and independent studies, focusing on digital solution development, user needs analysis, and cross-disciplinary collaboration. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI/UX & Product Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Front-End Develop</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="d-flex justify-content-center align-items-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="d-flex justify-content-center align-items-center">
                        {
                          projectsFE.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color"></img>
    </section>
  )
}

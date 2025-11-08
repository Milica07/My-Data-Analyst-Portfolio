import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Security Incidents Distribution",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Travel Security Overview",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project Security Overview",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Deliverables</h2>
                  <p>These are the main responsibilities that define my role</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav 
                      variant="pills" 
                      className="nav-pills mb-5 justify-content-center align-items-center" 
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ fontSize: "0.85rem" }}>Analytics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ fontSize: "0.85rem" }}>Platform Mgmt</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ fontSize: "0.85rem" }}>IT Admin</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p style={{ textAlign: "center", marginBottom: "30px" }}>
                          Created end-to-end corporate security dashboards from scratch, orchestrating a data pipeline to collect, transform, 
                          and analyze data from diverse sources, and visualizing insights through Power BI.  </p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                            Collaborate with developers to design, enhance, and maintain the Property Protection platform—an IT solution for managing site security assessments. 
                            Coordinate and support feature and change request implementations to ensure 
                            alignment with property protection processes, while optimizing usability, data integrity, and business outcomes.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Managing the administration of the Enablon System Security Module, including access management, permissions, and notifications. 
                          I collaborate with stakeholders to assess and implement new fields, organize trainings, and provide guidance on reporting and 
                          reviewing security incidents. My focus is on ensuring data quality and enabling meaningful insights through effective data visualization.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background shape" />
    </section>
  );
};

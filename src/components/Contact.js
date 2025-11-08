import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const workCategories = {
    "Data Visualization": [
      "Analyze data and create reports using Power BI (Power Query, DAX, Dashboards), Tableau, Alteryx, Excel, and Google Sheets.",
      "Apply basic programming knowledge in Python and R, and utilize SQL for querying data.",
      "Identify patterns, gaps, and opportunities through analytical thinking and attention to detail."
    ],
    "Platform Coordination": [
    "Use Jira to manage platform development, track project tasks, and ensure timely delivery.",
    "Plan, coordinate, and conduct user trainings to improve understanding of system features and support efficient task execution."
    ],
    "Enablon Security Module Administration": [
      "Manage user accounts and configure permissions to maintain secure system access.",
      "Create, maintain, and monitor system notifications to ensure compliance and timely actions.",
      "Define and prioritize requirements for new data fields and system enhancements to support improved data accuracy, integrity, and reporting.",
      "Lead training initiatives for new and existing users to enhance adoption, understanding, and effective use of system features."
    ],
    "Professional Attributes": [
      "Continuously monitor advancements in the technologies I use, apply industry best practices, and drive ongoing professional growth.",
      "Collaborate effectively in diverse, cross-functional, and international teams.",
      "Act as a self-motivated, strategic thinker with a strong curiosity and passion for applying data analytics to corporate security challenges."
    ]
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Work Illustration"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>What I Do</h2>
                  <Row>
                    {Object.entries(workCategories).map(([category, items], index) => (
                      <Col key={index} md={6} className="mb-4">
                        <h4>{category}</h4>
                        <ul>
                          {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

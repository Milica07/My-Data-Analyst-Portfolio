import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Responsibilities</h2>
              <p>
                These are my main professional responsibilities and the skills I apply in my role.<br />
                I support Corporate Security processes from the IT tools perspective and contribute to data-driven 
                insights through data visualization, platform coordination, system administration, and tool ownership.              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Dashboards" />
                  <h5>Dashboards & Analytics</h5>
                    <p>Developing Power BI dashboards that transform complex data into clear reports and support data-driven decision making.</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Platform Coordinator" />
                  <h5>Platform Coordination</h5>
                    <p>Overseeing and optimizing the Property Protection platform, while coordinating feature enhancements and change requests.</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="System Administration" />
                  <h5>System Administration</h5>
                  <p>Managing Enablon System Security Module.</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Data Quality" />
                  <h5>Data Quality & Visualization</h5>
                  <p>Ensuring integrity and usability of corporate security data while enabling actionable insights.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background shape" />
    </section>
  )
}

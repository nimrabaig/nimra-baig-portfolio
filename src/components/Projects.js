/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.PNG";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.PNG";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "A Digital Marketing Agency Website",
      imgUrl: projImg3,
      hashtags: ["React.js", "Styled-components", "Express.js", "AWS"],
      url: "https://digital-marketing-react-website.netlify.app/"
    },
    {
      title: "Backstage",
      description: "A search engine to explore over 2 million hotels & homes at low price",
      imgUrl: projImg2,
      hashtags: ["Next.js", "Nest.js", "PostgreSQL", "AWS"],
      url: "https://www.backstagehotels.sh"
    },
    {
      title: "Workspace",
      description: "All-in-one HR Software",
      imgUrl: projImg4,
      hashtags: ["React.js", "Recoil", "Nest.js", "PostgreSQL", "AWS", ],
      url: "https://public.work-space.me/signup"
    },
    {
      title: "Koerber Pharma",
      description: "An integrated pharmaceutical manufacturing solutions",
      imgUrl: projImg5,
      hashtags: ["React.js", "Recoil", "Ant", "AWS", "PostgreSQL", "Nest.js"],
      url: "https://www.koerber-pharma.com/en/"
    },
    {
      title: "Lumenta Digital",
      description: "A Digital Marketing Agency based in Canada",
      imgUrl: projImg1,
      hashtags: ["Next.js", "Express.js", "AWS"],
      url: "https://www.lumentadigital.com"
    },
    {
      title: "Blogs Portal",
      description: "Easily Customizeable blogs Writing Platform",
      imgUrl: projImg6,
      hashtags: ["React.js", "Netlify"],
      url: "https://blogs-portal.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  Crafting robust solutions across the stack, bridging innovation with precision
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row style={{ display: "flex", justifyContent: "center"}}>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

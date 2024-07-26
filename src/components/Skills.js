import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import ts from "../assets/img/ts.png";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import tailwind from "../assets/img/tailwind.png";
import node from "../assets/img/node.png";
import mongo from "../assets/img/mongo.png";
import next from "../assets/img/next.png";
import express from "../assets/img/express.png";
import aws from "../assets/img/aws.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Empowering digital experiences with comprehensive expertise in both backend and frontend development. <br></br>
                From architecting scalable solutions to designing intuitive user interfaces, <br></br> I bring a holistic approach to crafting dynamic web applications.</p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 40, padding: 5 }}>
                <div className="item">
                  <h5>HTML</h5>
                  <img src={html} alt="" />
                </div>
                <div className="item">
                  <h5>CSS</h5>
                  <img src={css} alt="" />
                </div>
                <div className="item">
                  <h5>Javascript</h5>
                  <img src={js} alt="" />
                </div>
                <div className="item">
                  <h5>Typescript</h5>
                  <img src={ts} alt="" />
                </div>
                <div className="item">
                  <h5>React</h5>
                  <img src={react} alt="" />
                </div>
                <div className="item">
                  <h5>Redux Toolkit</h5>
                  <img src={redux} alt="" />
                </div>
                <div className="item">
                  <h5>tailwind</h5>
                  <img src={tailwind} alt="" />
                </div>
                <div className="item">
                  <h5>Node.js</h5>
                  <img src={node} alt="" />
                </div>
                <div className="item">
                  <h5>Express.js</h5>
                  <img src={express} alt="" />
                </div>
                <div className="item">
                  <h5>Next.js</h5>
                  <img src={next} alt="" />
                </div>
                <div className="item">
                  <h5>MongoDB</h5>
                  <img src={mongo} alt="" />
                </div>
                <div className="item">
                  <h5>AWS</h5>
                  <img src={aws} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pp_rounded_contact from "../image/pp_rounded_contact.png";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { Link } from "react-router-dom";

class ResumePage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} tablet={12} phone={12}>
            <div style={{ textAlign: "center" }}>
              <img
                src={pp_rounded_contact}
                alt="resume"
                style={{ height: "200px" }}
              />

              <h2
                style={{
                  fontWeight: "bold",
                  fontFamily: "Oxygen, sans-serif",
                  paddingTop: "1em",
                }}
              >
                Paulo Pereira
              </h2>
              <h4 style={{ fontFamily: "Oxygen, sans-serif", color: "grey" }}>
                Ph.D. Computer Science
              </h4>
              <hr
                style={{
                  margin: "auto",
                  borderTop: "3px solid rgb(66,66,66)",
                  width: "50%",
                }}
              />
              <p
                style={{
                  textAlign: "justify",
                  width: "75%",
                  margin: "auto",
                  marginTop: "25px",
                  marginBottom: "25px",
                  fontFamily: "Oxygen, sans-serif",
                }}
              >
                I am a PhD computer science student at Federal University of
                Pernambuco in Brazil. My skills are software development,
                computer networks, cloud and fog computing, time series
                forecast, performance and availability evaluations, analytical
                modeling, machine learning, and computer vision.
              </p>
              <hr
                style={{
                  margin: "auto",
                  borderTop: "3px solid rgb(66,66,66)",
                  width: "50%",
                }}
              />
              <h4
                style={{
                  fontFamily: "Oxygen, sans-serif",
                  marginBottom: "0px",
                }}
              >
                Recife
              </h4>
              <h5
                style={{ fontFamily: "Oxygen, sans-serif", marginTop: "0px" }}
              >
                Pernambuco - Brazil
              </h5>
            </div>
          </Cell>
          <Cell
            className="resume-right-col"
            col={8}
            tablet={12}
            phone={12}
            style={{ fontFamily: "Oxygen, sans-serif" }}
          >
            <h2 style={{ fontFamily: "Oxygen, sans-serif" }}>Goals</h2>
            <p style={{ textAlign: "justify" }}>
              My main goal is to apply my knowledge of programming, statistics,
              Artificial Intelligence, data wrangling, and data visualiztion in
              real-world projects. Thus, I will be able to get experience and
              improve my abilities as a data science professional.
            </p>

            <hr
              style={{
                margin: "auto",
                width: "75%",
              }}
            />
            <h2 style={{ fontFamily: "Oxygen, sans-serif" }}>Education</h2>
            {/** Phd */}
            <Education
              startYear={2019}
              endYear={"Present"}
              schoolName={"Universidade Federal de Pernambuco - CIn UFPE"}
              position={"Ph.D in Computer Science"}
              schoolDescription={
                "Thesis (temporary): Performability Evaluation of Object Detection systems in Edge and Fog Environments"
              }
            />

            {/** Masters */}
            <Education
              startYear={2017}
              endYear={2019}
              schoolName={"Universidade Federal de Pernambuco - CIn UFPE"}
              position={"MSc in Computer Science"}
              schoolDescription={
                "Dissertation: A Hybrid Strategy for Auto-scaling of VMs: An Approach Based on Time Series and Thresholds"
              }
            />

            {/** Exchange student */}
            <Education
              startYear={2014}
              endYear={2015}
              schoolName={"State University of New York at Oswego - SUNY"}
              schoolDescription={
                "English as a Second Language/Computer Science Bachelor."
              }
            />

            {/** Bachelor */}
            <Education
              startYear={2010}
              endYear={2016}
              schoolName={"Universidade Federal Rural de Pernambuco - UFRPE"}
              schoolDescription={"Computer Science Bachelor Degree."}
            />

            <hr
              style={{
                margin: "auto",
                width: "75%",
              }}
            />
            <h2 style={{ fontFamily: "Oxygen, sans-serif" }}>Experience</h2>
            <Experience
              startYear={2017}
              endYear={"Present"}
              position={"System Developer, MoDCS Research Group."}
              place={"Pernambuco, Brazil"}
              jobDescription={
                "Maintaining and developing new features for the Mercury Modeling Tool."
              }
              relevantSkills={["Java", "Analytical Modeling, Simulation"]}
            />

            <Experience
              startYear={2012}
              endYear={2014}
              position={"System Developer, Time Jr."}
              place={"Pernambuco, Brazil"}
              jobDescription={
                "Developed many systems such as web systems and desktop systems."
              }
              relevantSkills={[
                "Java, Primefaces, PHP, SQL, HTML, Javascript, CSS",
                "Problem-solving",
                "Teamwork",
              ]}
            />

            <Experience
              startYear={2013}
              endYear={2013}
              position={
                "Instructor in Web Development Course , Time Jr Marathon of Courses"
              }
              place={"Pernambuco, Brazil"}
              jobDescription={
                "Taught students how to develop a web system using PHP."
              }
              relevantSkills={[
                "PHP, SQL, HTML, Javascript, CSS",
                "Communication",
                "Public Speaking",
              ]}
            />

            <hr
              style={{
                margin: "auto",
                width: "75%",
              }}
            />
            <h2 style={{ fontFamily: "Oxygen, sans-serif" }}>
              Scientific Publications
            </h2>
            <Link
              to="/publications"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Clik here to go to publications' Page
            </Link>
            <hr
              style={{
                margin: "auto",
                marginTop: "5em",
                width: "75%",
              }}
            />
            <h2 style={{ fontFamily: "Oxygen, sans-serif" }}>Skills</h2>
            <Skills skill={"Statistics"} progress={90} />
            <Skills skill={"Statistical Learning"} progress={85} />
            <Skills skill={"Time Series"} progress={85} />
            <Skills skill={"Artificial Intelligence"} progress={70} />
            <Skills skill={"Markov Chains"} progress={70} />
            <Skills skill={"Python"} progress={80} />
            <Skills skill={"Django"} progress={10} />
            <Skills skill={"React"} progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ResumePage;

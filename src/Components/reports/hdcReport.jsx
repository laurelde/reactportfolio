import React, { Component } from "react";
import Header from "../header/header";

class HDCReport extends Component {
  state = {};
  render() {
    return (
      <>
        <Header></Header>
        <h1>HDC App</h1>
        <h1 class="projectType">HDC on Campus</h1>

        <div class="specs">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <h2>
                <img class="icon" src="images/icons/partner.svg"></img>
                <strong> Client</strong>{" "}
              </h2>
              <h2>Hagerty</h2>
            </div>
            <div class="col-sm-4 col-xs-12">
              <h2>
                <img class="icon" src="images/icons/girl.svg"></img>
                <strong> Role</strong>
              </h2>
              <h2>Media Content Intern</h2>
            </div>
            <div class="col-sm-4 col-xs-12">
              <h2>
                <img class="icon" src="images/icons/calendar.svg"></img>
                <strong> Duration</strong>
              </h2>
              <h2>May 2019 - August 2019</h2>
            </div>
          </div>
          <div class="row">
            <h2>
              <strong>Skills: </strong>UX Design, Persona Creation, Wireframing,
              Prototyping, Figma
            </h2>
          </div>
        </div>

        <section class="project">
          <h2>Problem:</h2>
          <p>
            Hagerty is seeking to expand membership for their Driver's Club,
            HDC. While they are steadily gaining membership in older
            populations, younger generations are not being represented as well.
            My team's goal is to find a way to appeal to college students and
            make them want to become full-time HDC members by the time they
            graduate.
          </p>

          <h2>Research:</h2>
          <p>
            In gathering members across various locations, we decided to create
            a centralized app to standardize the HDC College community and
            provide access to all resources that an HDC membership provides. To
            determine what our app should include, I created a few personas to
            focus the design direction towards real users.
          </p>

          <img src="images/prototyping/persona1.jpg" class="left-block"></img>
          <br></br>
          <img src="images/prototyping/persona2.jpg" class="right-block"></img>
          <br></br>
          <img
            src="images/prototyping/persona3.jpg"
            class="left-block bottom-image"
          ></img>
          <br></br>
          <p>
            With our user personas in mind, the next step was to create goals
            and requirements for the app. This list of central functions and
            features would drive the design process and ensure that we catered
            to our customers.
          </p>

          <h2>Goals</h2>
          <div class="list-items">
            <ul>
              <li>
                Provide a centralized space for all HDC on Campus features
              </li>
              <li>
                Facilitate the transition from HDC on Campus to full HDC
                membership{" "}
              </li>
              <li>Allow access to The Shop and other Hagerty core brands</li>
              <li>Organize events in a calendar for HDC on Campus events</li>
              <li>
                Host forums for discussions based on both geographic location
                and theme
              </li>
              <li>Post digital version of Hagerty's magazine</li>
            </ul>
          </div>

          <h2>Work Flows:</h2>
          <p>
            Once we determined our goals and main features, I went detailed the
            workflows for how each feature of the app would function. This made
            sure that users could accomplish their goals with minimal effort and
            through intuitive models.
          </p>

          <img
            src="images/prototyping/Workflows-2.jpg"
            class="center-block"
            id="workflow-hdc"
          ></img>

          <h2>Sketches:</h2>
          <p>
            Next, I developed sketches and wireframes to figure out an effective
            way to display all necessary information for each page a user could
            visit. I used a consistent navigation bar along the bottom of the
            screen so users could easily select buttons with their thumb. I also
            focused on sharing more images rather than words to produce an
            attractive aesthetic.
          </p>

          <img
            src="images/prototyping/wireframing.jpg"
            class="center-block"
            id="wireframing-hdc"
          ></img>

          <h2>High-Fidelity Frames:</h2>
          <p>
            Finally, I created high-fidelity mockups for the main pages in the
            application. I utilized good user interface design practices,
            including Gestalt principles of orientation and similarity to allow
            users to easily understand how information on each page is related.
            With consistent branding throughout the app, the HDC on Campus
            prototype seamlessly extends the Hagerty brand and community to
            college students.
          </p>

          <img
            src="images/prototyping/deliverables.jpg"
            class="center-block"
            id="wireframing-hdc"
          ></img>

          <h2>Solution:</h2>
          <p>
            Create a centralized connection between Hagerty Driver's Club on
            Campus as well as full-time HDC members in the form of an accessible
            mobile application.
          </p>
        </section>
        <hr></hr>
        <section class="nav-other-projects">
          <div class="row projectLinks">
            <div class="col-4 projPageLink">
              <a href="interaction_design.html">
                <div>
                  <h4>Interaction Design</h4>
                </div>
                <div>
                  <img
                    class="projectFooter"
                    src="images/classify_logo.png"
                  ></img>
                </div>
              </a>
            </div>
            <div class="col-4 projPageLink midLink">
              <a href="consulting.html">
                <div>
                  <h4>Consulting</h4>
                </div>
                <div>
                  <img
                    class="projectFooter"
                    src="images/consulting_logo.png"
                  ></img>
                </div>
              </a>
            </div>
            <div class="col-4 projPageLink">
              <a href="design_thinking.html">
                <div>
                  <h4>Design Thinking</h4>
                </div>
                <div>
                  <img
                    class="projectFooter"
                    src="images/design_thinking_logo.png"
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HDCReport;

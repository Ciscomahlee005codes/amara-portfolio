import React from "react";
import "./Skills.css";
import {
  FaGoogle,
  FaSlack,
  FaTrello,
  FaMicrosoft,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      {/* SECTION TITLE */}
      <div className="skills-title">
        <span>MY SKILLS</span>
        <h2>Tools & Expertise</h2>
        <p>
          Helping businesses stay productive, organized, and professionally
          managed through modern virtual assistance solutions.
        </p>
      </div>

      {/* SKILLS CONTAINER */}
      <div className="skills-container">
        {/* LEFT CONTENT */}
        <div className="skills-left">
          <div className="skill-box">
            <div className="skill-info">
              <h4>Email Management</h4>
              <span>95%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress email"></div>
            </div>
          </div>

          <div className="skill-box">
            <div className="skill-info">
              <h4>Calendar Scheduling</h4>
              <span>92%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress calendar"></div>
            </div>
          </div>

          <div className="skill-box">
            <div className="skill-info">
              <h4>Customer Support</h4>
              <span>90%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress support"></div>
            </div>
          </div>

          <div className="skill-box">
            <div className="skill-info">
              <h4>Data Entry & Research</h4>
              <span>88%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress research"></div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="skills-right">
          <div className="tool-card">
            <FaGoogle />
            <h4>Google Workspace</h4>
          </div>

          <div className="tool-card">
            <FaSlack />
            <h4>Slack</h4>
          </div>

          <div className="tool-card">
            <FaTrello />
            <h4>Trello</h4>
          </div>

          <div className="tool-card">
            <SiNotion />
            <h4>Notion</h4>
          </div>

          <div className="tool-card">
            <FaMicrosoft />
            <h4>Microsoft Office</h4>
          </div>

          <div className="tool-card">
            <FaCalendarAlt />
            <h4>Scheduling Tools</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
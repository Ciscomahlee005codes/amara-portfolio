import React from "react";
import "./About.css";
import {
  FaTasks,
  FaHeadset,
  FaCalendarCheck,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import Amara from "../../assets/Amarachi.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Section Title */}
      <div className="about-title">
        <span>ABOUT ME</span>
        <h2>Your Reliable Virtual Assistant</h2>
      </div>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <div className="about-image">
            <img
              src={Amara}
              alt="virtual assistant"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <p className="about-intro">
            I help busy entrepreneurs, startups, and growing businesses stay
            organized, productive, and stress-free by handling the daily tasks
            that slow them down.
          </p>

          <p className="about-text">
            From calendar management and customer support to email handling and
            administrative assistance, I bring professionalism, efficiency, and
            attention to detail into every project.
          </p>

          {/* Features */}
          <div className="about-cards">
            <div className="about-card">
              <FaTasks />
              <h4>Task Management</h4>
              <p>Keeping workflows organized and productive.</p>
            </div>

            <div className="about-card">
              <FaHeadset />
              <h4>Client Support</h4>
              <p>Professional communication and customer care.</p>
            </div>

            <div className="about-card">
              <FaCalendarCheck />
              <h4>Scheduling</h4>
              <p>Managing appointments and meetings efficiently.</p>
            </div>

            <div className="about-card">
              <FaEnvelopeOpenText />
              <h4>Email Handling</h4>
              <p>Inbox organization and fast response management.</p>
            </div>
          </div>

          {/* CTA */}
          <button className="about-btn">Let's Work Together</button>
        </div>
      </div>
    </section>
  );
};

export default About;
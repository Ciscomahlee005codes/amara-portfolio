import React from "react";
import "./Portfolio.css";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaEnvelope,
  FaHeadset,
  FaTasks,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      {/* SECTION TITLE */}
      <div className="portfolio-title">
        <span>PORTFOLIO</span>
        <h2>Recent Projects & Client Work</h2>
        <p>
          Here are some of the services and client support solutions I’ve
          successfully managed as a professional Virtual Assistant.
        </p>
      </div>

      {/* PORTFOLIO CARDS */}
      <div className="portfolio-container">
        {/* CARD 1 */}
        <div className="portfolio-card">
          <div className="portfolio-icon">
            <FaCalendarCheck />
          </div>

          <h3>Executive Scheduling</h3>

          <p>
            Managed meetings, appointments, travel plans, and business
            calendars for busy executives while ensuring maximum productivity.
          </p>

          <button>
            View Details <FaArrowRight />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="portfolio-card">
          <div className="portfolio-icon">
            <FaEnvelope />
          </div>

          <h3>Email Management</h3>

          <p>
            Organized inboxes, handled professional communication, filtered
            important emails, and maintained smooth client interactions.
          </p>

          <button>
            View Details <FaArrowRight />
          </button>
        </div>

        {/* CARD 3 */}
        <div className="portfolio-card">
          <div className="portfolio-icon">
            <FaHeadset />
          </div>

          <h3>Customer Support</h3>

          <p>
            Provided responsive and professional customer support through email,
            live chat, and communication platforms.
          </p>

          <button>
            View Details <FaArrowRight />
          </button>
        </div>

        {/* CARD 4 */}
        <div className="portfolio-card">
          <div className="portfolio-icon">
            <FaTasks />
          </div>

          <h3>Administrative Assistance</h3>

          <p>
            Supported businesses with data entry, document management,
            organization, online research, and workflow coordination.
          </p>

          <button>
            View Details <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
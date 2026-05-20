import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* SECTION TITLE */}
      <div className="contact-title">
        <span>CONTACT</span>
        <h2>Let’s Work Together</h2>
        <p>
          Have a project, business task, or support role you need help with?
          Feel free to reach out and let’s create something productive together.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-info-card">
            <FaEnvelope />

            <div>
              <h4>Email Address</h4>
              <p>yourmail@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <FaPhoneAlt />

            <div>
              <h4>Phone Number</h4>
              <p>+234 808 345 2132</p>
            </div>
          </div>

          <div className="contact-info-card">
            <FaMapMarkerAlt />

            <div>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form>
            <div className="input-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="full-input"
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer-top">
        <h2>Let’s Build Something Amazing Together.</h2>

        <div className="footer-socials">
          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
  <p>
    © 2026 All Rights Reserved. Designed & Developed by{" "}
    
    <a
      href="https://chinemerem-portfolio-two.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      De Boy Programmer
    </a>
  </p>
</div>
    </footer>
  );
};

export default Footer;
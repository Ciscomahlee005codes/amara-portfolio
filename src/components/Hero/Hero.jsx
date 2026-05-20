import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedinIn, FaAt } from "react-icons/fa";
import Amara from "../../assets/Amarachi.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-content">
          <h3 className="intro">Hi, I am</h3>

          <h1 className="hero-name">Nwokoro Amarchi Mary-Cynthia</h1>

          <div className="typing-text">
            <TypeAnimation
              sequence={[
                "Virtual Assistant",
                2000,
                "Administrative Support Specialist",
                2000,
                "Customer Support Expert",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">
            I create modern, responsive and visually captivating digital
            experiences that help brands stand out online.
          </p>

          <div className="social-icons">
            <a href="/">
              <FaAt />
            </a>

            <a href="/">
              <FaGithub />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={Amara} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import "./Hero.css";
import { FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Amara from "../../assets/Amara-2.jpeg";
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
            <a mailto="mailto:Amarachukwunwokoro@gmail.com">
              <MdEmail />
            </a>

            <a href="https://twitter.com/yourusername">
              <FaXTwitter />
            </a>

            <a href="https://linkedin.com/in/yourusername">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={Amara} alt="hero" className="hero-pics" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import "./About.css";
import Walfindo from "../../assests/walfindo.png";
import { BiMedal, BiUser, BiFolder } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Walfindo} alt="A headshot of Walfindo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year work experience</small>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>Education</h5>
              <small>Institut Teknologi dan Bisnis PalComTech</small>
            </article>
            <article className="about__card">
              <BiFolder className="about__icon" />
              <h5>Hobbies</h5>
              <small>Coding, Footballl & Martial Arts </small>
            </article>
          </div>
          <p>
            I am a Bachelor graduate majoring in Informatics, has experience in
            Cyber Security, Penetration Testing, Networking and Application
            Development using several Frameworks such as Laravel and React JS. I
            am currently pursuing a career as a Software Engineer I can learn
            new things, work with team or individual and I love to learn and I
            am always looking to learn and experiment with new technologies!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

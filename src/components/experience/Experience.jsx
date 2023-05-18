import React from "react";
import "./Experience.css";
import {
  FaReact,
  FaPhp,
  FaGitAlt,
  FaLinux,
  FaLaravel,
  FaNetworkWired,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
// import { MdHttp } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technology Stack</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>React.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Next.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaLinux className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Linux</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaPhp className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaLaravel className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Laravel</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaNetworkWired className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Network <br />
                  Security
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <FaFigma className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

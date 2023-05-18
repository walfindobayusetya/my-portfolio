import React from "react";
import "./Portfolio.css";
import SMP from "../../assests/SMP6.png";
import SBS from "../../assests/SBS.png";
import LHI from "../../assests/LHI.png";
import Server from "../../assests/server.jpg";

const projects = [
  {
    id: 1,
    image: SMP,
    title: "SMP Negeri 6 Unggul Sekayu",
    description:
      "Collaborated with the team CV. Karya Siber Indonesia in making academic information system applications for SMP Negeri 6 Unggul located in Sekayu. Where the technology used is HTML, CSS (Bootstrap 4), Javascript and Laravel.",
  },
  {
    id: 2,
    image: SBS,
    title: "PT. Semangat Baru Sejahtera",
    description:
      "Creating UI/UX Design using Figma and Slicing Implementation to Website Pages that were built using HTML, CSS (Bootstrap 5), JavaScript and Laravel technology.",
  },
  {
    id: 3,
    image: LHI,
    title: "Linuxhackingid",
    description:
      "Incorporated into the Linuxhackingid Founding Organization Team which aims to learn cyber security education and penetration testing",
  },
  {
    id: 4,
    image: Server,
    title: "Server security",
    description:
      "Implementation and Configuration of Server Network Security Using a High Interaction Honeypot, Port Security Using Port Knocking and Server Hardening on Iptables for Security from Cyber Security attacks applied to the Department Communication and Informatics of Palembang City",
  },
];

const Portfolio = ({ link }) => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h2>{project.title}</h2>
              <small className="portfolio__desc">{project.description}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

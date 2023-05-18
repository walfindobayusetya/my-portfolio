import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://id.linkedin.com/in/walfindo-bayu-setya-442750212"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/walfindobayusetya" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Socials;

import React from "react";
import "./Header.css";
import Action from "./Action";
import Socials from "./Socials";
import animationData from "../../lotties/dev1.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Saya</h5>
        <h1>Walfindo Bayu Setya</h1>
        <h5 className="text-light">
          Full Stack Developer dan Security Engineer
        </h5>
        <Action />

        <Socials />

        <div className="animation__container">
          <Player
            className="animation__item"
            autoplay
            loop
            src={animationData}
          ></Player>
        </div>

        <a className="scroll__down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

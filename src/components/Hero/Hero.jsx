import "./Hero.css";
import heroIconOne from "../../assets/hero-side-icons/hero-side-icon-one.png";
import heroIconTwo from "../../assets/hero-side-icons/hero-side-icon-two.png";
import heroIconThree from "../../assets/hero-side-icons/hero-side-icon-three.png";
import HeroFeature from "./Hero-Features/HeroFeature";
import star from "../../assets/hero-feature-icons/star.png";
import watch from "../../assets/hero-feature-icons/watch.png";
import quality from "../../assets/hero-feature-icons/4k.png";
import play from "../../assets/play.png";
import list from "../../assets/list.png";
import home from "../../assets/hero-buttons/home.png";
import search from "../../assets/hero-buttons/search.png";
import video from "../../assets/hero-buttons/video.png";
import monitor from "../../assets/hero-buttons/monitor.png";
import ball from "../../assets/hero-buttons/ball.png";
import HeroButton from "./Hero-Buttons/HeroButton";
import { useState } from "react";

const heroFeatures = [
  {
    icon: star,
    text: "4.9 reviews",
  },
  {
    icon: watch,
    text: "02h 30m",
  },
  {
    icon: quality,
    text: "4k Quality",
  },
];

const heroButtons = [
  { icon: home },
  { icon: search },
  { icon: video },
  { icon: monitor },
  { icon: ball },
];

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-icons">
        <img
          src={heroIconOne}
          className="hero-side-icon-one"
          alt="hero-side-icon-one"
        />
        <img
          src={heroIconTwo}
          className="hero-side-icon-two"
          alt="hero-side-icon-two"
        />
        <img
          src={heroIconThree}
          className="hero-side-icon-three"
          alt="hero-side-icon-three"
        />
      </div>
      <div className="hero-secondary">
        <div className="hero-details">
          <p className="hero-title">
            The Lord <br />
            of The Rings
          </p>
          <div className="hero_feature-layout">
            {heroFeatures.map((hf) => (
              <HeroFeature icon={hf.icon} text={hf.text} />
            ))}
          </div>
          <p className="hero-title_description">
            The Lord of the Rings is a trilogy of epic fantasy adventure films
            directed.
          </p>
          <div className="hero-details_buttons">
            <button className="main_button">
              <img src={play} alt="play icon" />
              PLAY TRAILER
            </button>
            <button className="sub_button">
              <img src={list} alt="list icon" />
              ADD TO LIST
            </button>
          </div>
        </div>
        <div className="hero-buttons">
          {heroButtons.map((hb) => (
            <HeroButton icon={hb.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import {
  StyledBg,
  StyledDivBg,
  StyledBlackHead,
  StyledBlackSub,
  StyledWhiteHead,
  StyledWhiteHead2,
  StyledBlackHead2,
  StyledWhiteSub,
} from "./StyledComponents";

import Skills from "./skillcomponent";
import grubix from "../assets/grubbix.png";
import abc from "../assets/abc.png";
import gpt3 from "../assets/gpt3.png";
import george from "../assets/avatar.svg";
import hero from "../assets/hero.svg";
import hero1 from "../assets/hero1.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import wp from "../assets/wp.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import boot from "../assets/boot.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import lkin from "../assets/lkin.png";
import em from "../assets/em.png";
import tw from "../assets/tw.png";
import gh from "../assets/gh.png";
import lkin2 from "../assets/lkin2.png";
import em2 from "../assets/em2.png";
import tw2 from "../assets/tw2.png";
import gh2 from "../assets/gh2.png";

const Homepage = (props) => {
  return (
    <StyledBg theme={props.theme}>
      <div>
        <StyledBlackHead theme={props.theme} className="pt-5  home_head_text">
          Front-end Developer
        </StyledBlackHead>
        <StyledBlackSub theme={props.theme} className="p-3 home_sub_text">
          I code beautiful websites, and I love what I do.
        </StyledBlackSub>
        <img src={george} alt="" width="210px" className="rounded-circle m-5" />
      </div>
      <img
        theme={props.theme}
        src={props.theme ? hero : hero1}
        alt=""
        className="mt-5 hero"
      />
      <StyledDivBg theme={props.theme} id="about" className="about-me">
        <div className="about-me-text">
          <StyledWhiteHead
            theme={props.theme}
            className="about-me-content-text"
          >
            Hi, I'm George. Nice to meet you.
          </StyledWhiteHead>
          <StyledWhiteSub
            theme={props.theme}
            className=".about-me-content-text-p"
          >
            I am a quality oriented professional with 1+ years of experience and
            proven knowledge of front-end engineering framework and
            technologies. Aiming to leverage my skills to successfully fill the
            front-end engineering role at your company.
          </StyledWhiteSub>
          <button className="button-21">Resume</button>
          <button className="button-21">Contact Me</button>
        </div>
      </StyledDivBg>
      <div id="about" className="page_pad py-5">
        <div className="row mb-4">
          <div className="col-1">
            <hr width="60px" />
          </div>
          <div className="col-11">
            <p className="text-start small-p">CHECK OUT MY</p>
          </div>
        </div>
        <h2 className="text-start skill-head">SKILLS</h2>
        <div className="d-flex skill my-5 flex-wrap justify-content-center rounded-4 p-5">
          <Skills img={html} text="HTML" />
          <Skills img={css} text="CSS" />
          <Skills img={js} text="JS" />
          <Skills img={boot} text="BOOTSTRAP" className="mt-3" />
          <Skills img={sass} text="SASS" />
          <Skills img={css} text="TAILWIND" />
          <Skills img={react} text="REACT" />
          <Skills img={wp} text="WORDPRESS" />
          <Skills img={git} text="GIT" />
          <Skills img={github} text="GITHUB" />
        </div>
      </div>
      <div id="project" className="page_pad">
        <div className="row mb-4">
          <div className="col-1">
            <hr width="60px" />
          </div>
          <div className="col-11">
            <p className="text-start small-p">TAKE A LOOK AT MY</p>
          </div>
        </div>
        <h2 className="text-start skill-head">PROJECTS</h2>
        <div className="d-flex skill my-5 flex-wrap justify-content-center rounded-5 px-3 py-5">
          <div className="spice">
            <div className="spice_card rounded-5">
              <img src={abc} alt="" className="spice_image  rounded-5" />
              <div className="middle  rounded-5">
                <p className="spice_text"> Training Schools </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={grubix} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Family Get-Together </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={gpt3} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Birthday parties </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={grubix} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Outdoor Parties </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={gpt3} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Wedding Parties </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={abc} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Holiday Celebrations </p>
                <button className="button-21">visit website</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect py-5 my-5 p-2">
        <StyledBlackHead2 theme={props.theme}>
          Interested in collaborating or investing?
        </StyledBlackHead2>
        <StyledBlackSub theme={props.theme}>
          I’m always open to discussing product design work or partnership
          opportunities.
        </StyledBlackSub>
        <button className="button-80">Start a conversation</button>
      </div>
      <StyledDivBg theme={props.theme} className="footer">
        <div>
          <StyledWhiteHead2 theme={props.theme} className="footer-text">
            thegeorgeanya
          </StyledWhiteHead2>
          <StyledWhiteSub theme={props.theme} className="footer-text">
            Living, learning, and leveling up one day at a time.
          </StyledWhiteSub>
        </div>
        <div className="socials">
          <a href="mailto:">
            {props.theme ? <img src={gh} alt="" /> : <img src={gh2} alt="" />}
          </a>
          <a href="mailto:">
            {props.theme ? <img src={tw} alt="" /> : <img src={tw2} alt="" />}
          </a>
          <a href="mailto:">
            {props.theme ? (
              <img src={lkin} alt="" />
            ) : (
              <img src={lkin2} alt="" />
            )}
          </a>
          <a href="mailto:">
            {props.theme ? <img src={em} alt="" /> : <img className="pt-1" src={em2} alt="" />}
          </a>
        </div>
        <StyledWhiteSub theme={props.theme} className="footer-text">
          Handcrafted by me, George Anya.
        </StyledWhiteSub>
      </StyledDivBg>
    </StyledBg>
  );
};

export default Homepage;

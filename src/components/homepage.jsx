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
  StyledBlackDiv,
  StyledSpiceDiv,
} from "./StyledComponents";

import Skills from "./skillcomponent";
import grubix from "../assets/grubbix.png";
import huron from "../assets/huron.png";
import dev from "../assets/dev.png";
import robo from "../assets/robo.png";
import alsalf from "../assets/alsalf.png";
import abc from "../assets/abc.png";
import george from "../assets/avatar.png";
import hero from "../assets/hero.svg";
import hero1 from "../assets/hero1.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import mui from "../assets/mui.svg";
import sass from "../assets/sass.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import tailwind from "../assets/tailwind.svg";
import next from "../assets/next.svg";
import reactq from "../assets/reactq.svg";
import boot from "../assets/boot.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
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
      <div className="header">
        <img src={george} alt="" width="210px" className="rounded-circle" />
        <div className=" headertext">
          <StyledBlackHead theme={props.theme} className=" home_head_text">
            Front-end Developer
          </StyledBlackHead>
          <StyledBlackSub theme={props.theme} className="home_sub_text">
            I code beautiful websites, and I love what I do.
          </StyledBlackSub>
        </div>
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
          <a href="https://docs.google.com/document/d/1wzWm_HsI3HvDMnZkNDUEv5msGesSnlyF89uoHNMBR34/edit?usp=sharing">
            <button className="button-21">Resume</button>
          </a>
          <a href="mailto:georgeanya4real@gmail.com">
            <button className="button-21">Contact Me</button>
          </a>
        </div>
      </StyledDivBg>
      <div id="about" className="page_pad py-5">
        <StyledBlackDiv theme={props.theme} className="row mb-4">
          <div className="col-1">
            <hr width="60px" />
          </div>
          <div className="col-11">
            <p className="text-start small-p">CHECK OUT MY</p>
          </div>
          <h2 className="text-start skill-head mt-1">SKILLS</h2>
        </StyledBlackDiv>

        <StyledSpiceDiv
          theme={props.theme}
          className=" skill my-5  d-flex flex-wrap justify-content-center rounded-4 p-5"
        >
          <Skills theme={props.theme} img={html} text="HTML" />
          <Skills theme={props.theme} img={css} text="CSS" />
          <Skills theme={props.theme} img={js} text="JS" />
          <Skills
            theme={props.theme}
            img={boot}
            text="BOOTSTRAP"
            className="mt-3"
          />
          <Skills theme={props.theme} img={sass} text="SASS" />
          <Skills theme={props.theme} img={tailwind} text="TAILWIND" />
          <Skills theme={props.theme} img={react} text="REACT" />
          <Skills theme={props.theme} img={redux} text="REDUX" />
          <Skills theme={props.theme} img={next} text="NEXT" />
          <Skills theme={props.theme} img={reactq} text="REACT QUERY" />
          <Skills theme={props.theme} img={ts} text="TYPESCRIPT" />
          <Skills theme={props.theme} img={mui} text="MATERIAL UI" />
          <Skills theme={props.theme} img={git} text="GIT" />
          <Skills theme={props.theme} img={github} text="GITHUB" />
        </StyledSpiceDiv>
      </div>
      <div id="project" className="page_pad">
        <StyledBlackDiv theme={props.theme} className="row mb-4">
          <div className="col-1">
            <hr width="60px" />
          </div>
          <div className="col-11">
            <p className="text-start small-p">TAKE A LOOK AT MY</p>
          </div>
          <h2 className="text-start skill-head mt-1">PROJECTS</h2>
        </StyledBlackDiv>

        <StyledSpiceDiv
          theme={props.theme}
          className="d-flex skill my-5 flex-wrap justify-content-center rounded-5 px-3 py-5"
        >
          <div className="spice">
            <div className="spice_card rounded-5">
              <img src={abc} alt="" className="spice_image  rounded-5" />
              <div className="middle  rounded-5">
                <p className="spice_text"> ABC TRANSPORT </p>
                <a href="https://abc-transport.netlify.app/">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={dev} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Devfinder </p>
                <a href="https://my-dev-github-finder.netlify.app/">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={huron} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Huron </p>
                <a href="https://huroninntegrated.netlify.app/">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={alsalf} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> ALSALF </p>
                <a href="https://alsalf.netlify.app">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={robo} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> RoboFriends </p>
                <a href="https://myrobofriends.netlify.app">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
            <div className="spice_card rounded-5">
              <img src={grubix} alt="" className="spice_image rounded-5" />
              <div className="middle rounded-5">
                <p className="spice_text"> Grubbix </p>
                <a href="https://grubbix.netlify.app">
                  <button className="button-21 spice_text">
                    visit website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </StyledSpiceDiv>
      </div>
      <div className="connect py-5 my-5 p-2">
        <StyledBlackHead2 theme={props.theme}>
          Interested in collaborating?
        </StyledBlackHead2>
        <StyledBlackSub theme={props.theme}>
          I’m always open to discussing work or partnership opportunities.
        </StyledBlackSub>
        <a href="https://twitter.com/thegeorgeanya">
          <button className="button-80">Start a conversation</button>
        </a>
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
          <img src={gh} alt="" />
          </a>
          <a href="mailto:">
          <img src={tw} alt="" />
          </a>
          <a href="mailto:">
          <img src={lkin} alt="" />
          </a>
          <a href="mailto:">
          <img src={em} alt="" />
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

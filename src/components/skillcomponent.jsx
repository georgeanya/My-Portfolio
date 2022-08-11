import React from "react";
import {StyledBlackSub, StyledBg} from "./StyledComponents";


const Skills = ({ img, text, theme }) => {
  return (
    <StyledBg theme={theme} className="card card_style m-3">
      <img src={img} className="card-img-top skill_img" alt="..." />
      <div className="card-body">
        <StyledBlackSub theme={theme} className="card-text">
          {text}
        </StyledBlackSub>
      </div>
    </StyledBg>
  );
};

export default Skills;

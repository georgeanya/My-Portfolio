import React from "react";

const Skills = ({ img, text }) => {
  return (
    <div class='card card_style m-3'>
      <img src={img} class='card-img-top skill_img'  alt='...' />
      <div class='card-body'>
        <p class='card-text'>{text}</p>
      </div>
    </div>
  );
};

export default Skills;

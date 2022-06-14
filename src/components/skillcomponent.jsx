import React from "react";

const Skills = ({ img, text }) => {
  return (
    <div className='card card_style m-3'>
      <img src={img} className='card-img-top skill_img'  alt='...' />
      <div className='card-body'>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
};

export default Skills;

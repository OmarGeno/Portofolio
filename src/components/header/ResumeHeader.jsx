import React from "react";
import "./ResumeHeader.css";
import ResumeShapes from "./ResumeShapes";

function resumeHeader() {
  const fName = "mar";
  return (
    <div className="resume-container__header" id='navbar'>
      <div className="resume-container__mini-container">
        <div className="resume-container__text">
          <span>Hi,</span><br />
          <span>I'm <span className="o">O</span>{fName},</span><br />
          <span>web developer</span><br />
          <p>Full Stack Developer</p>
        </div>
      </div>
      <ResumeShapes />
    </div>
  );
}

export default resumeHeader;
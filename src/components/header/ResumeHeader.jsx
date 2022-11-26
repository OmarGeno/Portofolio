import React from "react";
import "./ResumeHeader.css";
import ResumeShapes from "./ResumeShapes";
import { motion } from "framer-motion";
import { LetterEffect } from "../Letter Effect/LetterEffect";

function ResumeHeader() {
  return (
    <motion.div className="resume-container__header" id='navbar' initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className="resume-container__mini-container">
        <div className="resume-container__text">
          <LetterEffect />
          <p>Full Stack Developer</p>
        </div>
      </div> 
      <ResumeShapes />
    </motion.div>
  );
}

export default ResumeHeader;
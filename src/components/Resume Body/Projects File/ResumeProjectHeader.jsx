import { PortofolioEffect } from "../../Letter Effect/PortofolioEffect";
import "./ResumeProjectHeader.css";

const ResumeProjectHeader = () => {
  return (
    <div className="resume-project__container" id="projects">
      <div className="resume-project__text-container">
        <div className="resume-project__title">
          <PortofolioEffect />
        </div>
        <br />
        <br />
        <div className="resume-project__text">
          Welcome to my portfolio, a showcase of my recent projects that reflect
          my dedication to innovation and continuous learning in the field of
          software development. As a passionate developer, I am committed to
          creating solutions that not only meet but exceed expectations. This
          portfolio is a testament to my ongoing efforts to refine my skills and
          apply new knowledge to enhance the projects I work on.
        </div>
      </div>
    </div>
  );
};

export default ResumeProjectHeader;

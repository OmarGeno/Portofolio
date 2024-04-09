import "./ResumeSingleProject.css";
import first from "./images/pabllo1.png";
import second from "./images/pabllo2.png";
import third from "./images/pabllo3.png";
import fourth from "./images/pabllo4.png";
import fifth from "./images/pabllo5.png";
import sixth from "./images/pabllo6.png";
import seventh from "./images/pabllo7.png";
import eighth from "./images/pabllo8.png";
import ninth from "./images/pabllo9.png";
import tenth from "./images/pabllo10.png";
import eleven from "./images/pabllo11.png";
import twelve from "./images/pabllo12.png";
import LogisticsEffect from "../../../Letter Effect/Project Effects/LogisticsEffect";

export const Logistics = () => {
  const imgs = [
    `${first}`,
    `${second}`,
    `${third}`,
    `${fourth}`,
    `${fifth}`,
    `${sixth}`,
    `${seventh}`,
    `${eighth}`,
    `${ninth}`,
    `${tenth}`,
    `${eleven}`,
    `${twelve}`,
  ];
  return (
    <div className="">
      <div className="resume-single__title">
        <LogisticsEffect />
      </div>
      <br />
      <div className="resume-single__text">
        Logistics Web Application Project <br />
        <br />
        Project Overview:
        <br />
        <br />I am pleased to present my contributions to the development of a
        groundbreaking Logistics Web Application, a project realized within
        FastApp Development company in 2023. This application, developed using
        Flutter, represents a significant achievement in the logistics industry,
        showcasing the power of teamwork and innovative technology.
        {/* <span>
          <a href="https://github.com/OmarGeno/Pizza-App">see project</a>
        </span> */}
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">

        </a>
      </span>
      <br />
      <br />
      <br />
      <div className="resume-single__container">
        {imgs.map((i) => (
          <div className="resume-single__container-mini">
            <div className="resume-single__div-img low-opacity">
              <img src={i} alt="materialize " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

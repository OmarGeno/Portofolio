import './ResumeSingleProject.css'
import first from './images/skill1.png'
import second from './images/skill2.png'
import third from './images/skill3.png'
import fourth from './images/skill3.png'
import fifth from './images/skill4.png'
import sixth from './images/skill5.png'
import seventh from './images/skill6.png'
import eighth from './images/skill7.png'
 
export const Addskills = () => {
  return (
    <div className="">
      <div className="resume-single__title">Skills board creater</div>
      <br />
      <div className="resume-single__text">
        This page was impelmented to let the user add his skills.This project can be nested within an apllication.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Spotify%20Album">
            see project
          </a>
        </span>
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
          
        </a>
      </span>
      <br />
      <br />
      <br />
      <div className="resume-single__container">
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={first} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={second} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={third} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={fourth} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={fifth} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={sixth} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={seventh} alt="materialize" />
          </div>
        </div>
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={eighth} alt="materialize" />
          </div>
        </div>
      </div>
    </div>
  )
}

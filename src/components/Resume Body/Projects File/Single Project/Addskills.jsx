import './ResumeSingleProject.css'
import first from './images/skill3.png'
import second from './images/skilledit.png'
import fifth from './images/skill4.png'
import sixth from './images/skill5.png'
import seventh from './images/skill6.png'
import eighth from './images/skill7.png'
 
export const Addskills = () => {
  const imgs = [`${first}`, `${fifth}`, `${second}`, `${sixth}`, `${seventh}`, `${eighth}`];
  return (
    <div className="">
      <div className="resume-single__title">Skills board creator</div>
      <br />
      <div className="resume-single__text">
        This page was impelmented to let the user add his skills. This project can be nested within an apllication.{' '}
        <span>
          <a href="https://github.com/OmarGeno/Add-skills">
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
        {
          imgs.map((i) => 
            <div className="resume-single__container-mini">
              <div className="resume-single__div-img low-opacity">
                <img src={i} alt="materialize " />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

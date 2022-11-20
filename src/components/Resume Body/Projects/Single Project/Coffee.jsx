import './ResumeSingleProject.css'
import first from './images/coffee2.png'
import second from './images/coffe1.png'

function Coffee() {
  return (
    <div className="">
      <div className="resume-single__title">Coffee Shops</div>
      <br />
      <div className="resume-single__text">
        This page was made using Materialize. Project preview below.
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
          Back to projects
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
      </div>
    </div>
  )
}

export default Coffee

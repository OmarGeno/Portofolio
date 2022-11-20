import './ResumeSingleProject.css'
import first from './images/materializae1.png'
import second from './images/materialize2.png'
import third from './images/Materialize3.png'
import fourth from './images/Materialize4.png'
import fifth from './images/materialize5.png'

function Campus() {
  return (
    <div className="">
      <div className="resume-single__title">Campus</div>
      <br />
      <div className="resume-single__text">
        A campus page based on the framework Materialize.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/Materialize%20Project">
            see project
          </a>
        </span>
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
      </div>
    </div>
  )
}

export default Campus

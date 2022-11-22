import { Link } from 'react-router-dom'
import './ResumeProjectComponent.css'

function ResumeProjectComponent(props) {
  return (
    <div className="resume-component__container">
      <div className="resume-component__image">
        <Link to={props.projectLink} >
          <img src={props.image} alt=""/>
        </Link>
      </div>
      <div className="resume-component__card" id='cont'>
        <div>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeProjectComponent

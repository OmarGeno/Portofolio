import { Link } from 'react-router-dom'
import './ResumeProjectComponent.css'

const scrollHandler = () => {
  window.scrollTo({top: 1000, left: 0, behavior: "smooth"});
}

const ResumeProjectComponent = (props) => {
  return (
    <div className="resume-component__container scrl">
      <div className="resume-component__image">
        <Link to={props.projectLink} onClick={scrollHandler} >
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

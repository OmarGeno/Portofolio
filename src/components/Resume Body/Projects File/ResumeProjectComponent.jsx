import './ResumeProjectComponent.css'

function ResumeProjectComponent(props) {
  return (
    <div className="resume-component__container">
      <div className="resume-component__image">
        <a href={props.link} target="_blank" rel='noreferrer'>
          <img src={props.image} alt=""/>
        </a>
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

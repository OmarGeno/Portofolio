import './ResumeSingleProject.css'

function ResumeCards() {
  return (
    <div className="">
      <div className="resume-single__title">Resume Cards</div><br />
      <div className="resume-single__text">
        The purpose of those cards is to serve as a minimum resume information and pass the candidates who look qualified for what you are looking for. Those were made using Angular(Typescript). <span><a href="https://github.com/OmarGeno/My-Projects/tree/Master/Angular/Resume%20Cards">see project</a></span>
      </div>
        <span className="resume-single__text">
          <a href="projects" rel="">
            Back to projects
          </a>
        </span><br /><br /><br />
      <div className="resume-single__container">
        <div className="resume-single__div-img">
          <img src="./images/angular.png" alt="spotify" />
        </div>
      </div>
    </div>
  )
}

export default ResumeCards
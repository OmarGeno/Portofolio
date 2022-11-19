import './ResumeSingleProject.css'

function Coffee() {
  return (
    <div className="">
      <div className="resume-single__title">Coffee Shops</div><br />
      <div className="resume-single__text">
        This page was made using Materialize. Project preview below.
      </div>
        <span className="resume-single__text">
          <a href="projects" rel="">
            Back to projects
          </a>
        </span><br /><br /><br />
      <div className="resume-single__container">
        <div className="resume-single__div-img">
          <img src="./images/coffe1.png" alt="spotify" />
        </div>
        <div className="resume-single__div-img">
          <img src="./images/coffee2.png" alt="spotify" />
        </div>
      </div>
    </div>
  )
}

export default Coffee
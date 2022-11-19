import './ResumeSingleProject.css'

function Campus() {
  return (
    <div className="">
    <div className="resume-single__title">Campus</div><br />
    <div className="resume-single__text">
      A campus page based on the framework Materialize. <span><a href="https://github.com/OmarGeno/My-Projects/tree/Master/Materialize%20Project">see project</a></span>
    </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
          Back to projects
        </a>
      </span><br /><br /><br />
    <div className="resume-single__container">
      <div className="resume-single__div-img">
        <img src="./images/materializae1.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/Materialize2.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/materialize3.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/materialize4.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/materialize5.png" alt="spotify" />
      </div>
    </div>
  </div>
  )
}

export default Campus
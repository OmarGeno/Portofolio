import './ResumeSingleProject.css'

function Expense() {
  return (
    <div className="">
      <div className="resume-single__title">Expense item</div><br />
      <div className="resume-single__text">
        An expense item using the React.js library. 
      </div>
        <span className="resume-single__text">
          <a href="projects" rel="">
            Back to projects
          </a>
        </span><br /><br /><br />
      <div className="resume-single__container">
        <div className="resume-single__div-img">
          <img src="./images/Expenseitem.png" alt="spotify" />
        </div>
      </div>
    </div>
  )
}

export default Expense
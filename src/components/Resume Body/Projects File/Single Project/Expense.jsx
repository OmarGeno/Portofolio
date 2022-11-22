import './ResumeSingleProject.css'
import first from './images/Expenseitem.png'

function Expense() {
  return (
    <div className="">
      <div className="resume-single__title">Expense item</div>
      <br />
      <div className="resume-single__text">
        An expense item using the React.js library.
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
         
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
      </div>
    </div>
  )
}

export default Expense

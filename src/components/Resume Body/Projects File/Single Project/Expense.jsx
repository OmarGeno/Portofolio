import './ResumeSingleProject.css'
import first from './images/Expenseitem.png'
import { ExpenseEffect } from '../../../Letter Effect/Project Effects/ExpenseEffect'

const Expense = () => {
  return (
    <div className="">
      <div className="resume-single__title"><ExpenseEffect/></div>
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

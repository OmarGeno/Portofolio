import './ResumeSingleProject.css'
import first from './images/exp1.png'
import second from './images/exp2.png'
import third from './images/exp3.png'
import { ExpenseEffect } from '../../../Letter Effect/Project Effects/ExpenseEffect'

const Expense = () => {
  return (
    <div className="">
      <div className="resume-single__title"><ExpenseEffect/></div>
      <br />
      <div className="resume-single__text">
        An expense item using the React.js library. {' '}
        <span>
          <a href="https://github.com/OmarGeno/Expense-Item" rel="noreferrer" target="_blank">
             see project
          </a>
        </span>
      </div>
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
      </div>
    </div>
  )
}

export default Expense

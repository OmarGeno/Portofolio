import './ResumeSingleProject.css'
import first from './images/tictactoe.png'
import second from './images/sss.png'
import { TicTacEffect } from '../../../Letter Effect/Project Effects/TicTacEffect'

const TicTac = () => {
  return (
    <div className="">
      <div className="resume-single__title"><TicTacEffect/></div>
      <br />
      <div className="resume-single__text">
        The tic-tac-toe game application using the ReactJS library.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Tic%20Tac%20Toe">
            see project
          </a>
        </span>
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
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={second} alt="materialize" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicTac

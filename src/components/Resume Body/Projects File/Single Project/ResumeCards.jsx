import './ResumeSingleProject.css'
import first from './images/angular.png'
import { ResumeCardsEffect } from '../../../Letter Effect/Project Effects/ResumeCardsEffect'

const ResumeCards = () => {
  return (
    <div className="">
      <div className="resume-single__title"><ResumeCardsEffect/></div>
      <br />
      <div className="resume-single__text">
        The purpose of those cards is to serve as a minimum resume information
        and pass the candidates who look qualified for what you are looking for.
        Those were made using Angular(Typescript).{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/Angular/Resume%20Cards">
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
      </div>
    </div>
  )
}

export default ResumeCards

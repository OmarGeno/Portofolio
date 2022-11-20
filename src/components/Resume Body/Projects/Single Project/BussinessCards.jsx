import './ResumeSingleProject.css'
import first from './images/angularcards.png'
import second from './images/angularcards2.png'

function BussinessCards() {
  return (
    <div className="">
      <div className="resume-single__title">Business cards</div>
      <br />
      <div className="resume-single__text">
        Those cards were made with Angular(Typescript). It had a filter feature
        to search for the details found inside the cards.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/Angular/Introduction%20Cards">
            see project
          </a>
        </span>
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
          Back to projects
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

export default BussinessCards

import { PortofolioEffect } from '../../Letter Effect/PortofolioEffect';
import './ResumeProjectHeader.css'

const ResumeProjectHeader = () => {
  return (
    <div className="resume-project__container" id="projects">
      <div className="resume-project__text-container">
        <div className="resume-project__title"><PortofolioEffect /></div>
        <br />
        <br />
        <div className="resume-project__text">
          Below you can watch some of my recent projects. I am still upgrading some of those projects with the new experience I gain every day, so make sure to come back from time to time.
        </div>
      </div>
    </div>
  )
}

export default ResumeProjectHeader

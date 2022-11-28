import './ResumeSingleProject.css'
import first from './images/spotify.png'
import second from './images/spotify2.png'
import { ArcaneEffect } from '../../../Letter Effect/Project Effects/ArcaneEffect'

const Arcane = () => {
  return (
    <div className="">
      <div className="resume-single__title"><ArcaneEffect /></div>
      <br />
      <div className="resume-single__text">
        Spotify page clone using the React.js library.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Spotify%20Album">
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

export default Arcane

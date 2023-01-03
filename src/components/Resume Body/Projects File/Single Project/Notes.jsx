import first from "./images/note1.png"
import second from "./images/note2.png"
import third from "./images/note3.png"
import { NotesEffect } from '../../../Letter Effect/Project Effects/NotesEffect'

export const Notes = () => {
  return (
    <div className="">
      <div className="resume-single__title"><NotesEffect /></div>
      <br />
      <div className="resume-single__text">
        Notes app using React.{' '}
        <span>
          <a href="https://github.com/OmarGeno/Note-App">
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
        <div className="resume-single__container-mini">
          <div className="resume-single__div-img">
            <img src={third} alt="materialize" />
          </div>
        </div>
      </div>
    </div>
  )
}

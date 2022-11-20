import { Link } from "react-scroll"
import "./ResumeShapes.css"

function ResumeShapes() {
  return (
    <div className="resumeShapes-container">
        <div className="resumeShapes-container__circle"></div>
        <div className="projects">
            <Link className="projects" to="projects" smooth={+true} offset={-150} duration={500}>Projects</Link>
        </div>
    </div>
  )
}

export default ResumeShapes
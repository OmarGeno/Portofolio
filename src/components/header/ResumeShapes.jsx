import { Link, Outlet } from "react-router-dom"
import "./ResumeShapes.css"

function ResumeShapes() {
  return (
    <>
      <div className="resumeShapes-container">
          <div className="resumeShapes-container__circle"></div>
          <div className="projects">
              <Link to="/projects" className="projects">Projects</Link>
          </div>
      </div>
      <Outlet />
    </>
  )
}

export default ResumeShapes
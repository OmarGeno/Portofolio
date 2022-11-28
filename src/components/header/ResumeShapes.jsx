import { Link, Outlet } from 'react-router-dom'
import { ProjectsEffect } from '../Letter Effect/ProjectsEffect'
import './ResumeShapes.css'

const ResumeShapes = () => {
  return (
    <>
      <div className="resumeShapes-container">
        <div className="resumeShapes-container__circle"></div>
        <div className="projects">
          <Link to="/projects" className="projects">
            <ProjectsEffect />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default ResumeShapes

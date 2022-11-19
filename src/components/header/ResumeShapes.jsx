import "./ResumeShapes.css"

function ResumeShapes() {
    const projects = "http://localhost:3000/"
  return (
    <div className="resumeShapes-container">
        <div className="resumeShapes-container__circle"><a href={projects}></a></div>
        <div className="projects">
            <a className="projects" href='#projects'>Projects</a>
        </div>
    </div>
  )
}

export default ResumeShapes
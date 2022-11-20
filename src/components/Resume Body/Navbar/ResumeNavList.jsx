import './ResumeCollapseList.css'
import { Link } from 'react-router-dom'


function ResumeNavList() {
    const omar = {
        about: 'About me',
        work: 'Projects',
        skills: 'My skills',
        contact: 'Contact',
      }
  return (
    <div className="resume-collapse__nav">
    <div>
      <Link to="about" smooth={+true} offset={50} duration={500}>
        {omar.about}
      </Link>
    </div>
    <div>
      <Link to="skills" smooth={+true} offset={50} duration={500}>
        {omar.skills}
      </Link>
    </div>
    <div>
      <Link to="contact" smooth={+true} offset={50} duration={500}>
        {omar.contact}
      </Link>
    </div>
  </div>
  )
}

export default ResumeNavList
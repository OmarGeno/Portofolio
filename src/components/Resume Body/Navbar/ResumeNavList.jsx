import './ResumeCollapseList.css'
import { Link, Outlet } from 'react-router-dom'

function ResumeNavList() {
  const omar = {
    about: 'About me',
    work: 'Projects',
    skills: 'My skills',
    contact: 'Contact',
  }
  return (
    <>
      <nav className="resume-collapse__nav">
        <div>
          <Link className='links-nav' to="/about" smooth={+true} offset={50} duration={500}>
            {omar.about}
          </Link>
        </div>
        <div>
          <Link className='links-nav' to="/skills" smooth={+true} offset={50} duration={500}>
            {omar.skills}
          </Link>
        </div>
        <div>
          <Link className='links-nav' to="/contact" smooth={+true} offset={50} duration={500}>
            {omar.contact}
          </Link>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default ResumeNavList

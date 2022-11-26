import { Link } from 'react-router-dom'
import './ResumeCollapseList.css'
import ResumeIconList from './ResumeIconList'
import ResumeNavList from './ResumeNavList'


function ResumeCollapseList() {
  
  return (
    <div className="resume-collapse__container-list">
      <div className="resume-collapse__list">
        <div className="logo-container">
          <Link to='/home'>
            <div className="logo-icon">
              <div></div>
            </div>
          </Link>
        </div>
        <ResumeNavList />
        <ResumeIconList />
      </div>
    </div>
  )
}

export default ResumeCollapseList

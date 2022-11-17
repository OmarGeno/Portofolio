import './ResumeCollapseList.css'

function ResumeCollapseList() {
  const omar = {
    about: 'About me',
    work: 'Projects',
    skills: 'My skills',
    contact: 'Contact',
  }
  return (
    <div className="resume-collapse__container-list">
      <div className="resume-collapse__list">
        <div className="logo-container">
          <a href="#navbar">
            <div className="logo-icon">
              <div></div>
            </div>
          </a>
        </div>
        <div className="resume-collapse__nav">
          <div>
            <a href="#aboutMe">{omar.about}</a>
          </div>
          <div>
            <a href="#skills">{omar.skills}</a>
          </div>
          <div>
            <a href="#contact">{omar.contact}</a>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon-tags">
            <a
              href="https://www.linkedin.com/in/omar-al-taha-4078781b4/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/512/linkedin-2.png"
                alt=""
              />
            </a>
          </div>
          <div className="icon-tags">
            <a href="https://github.com/OmarGeno" target="_blank">
              <img src="https://img.icons8.com/nolan/512/github.png" alt="" />
            </a>
          </div>
          <div className="icon-tags">
            <button className=" btn">
              <img
                src="https://img.icons8.com/plasticine/512/contract-job.png"
                alt=""
              />
              <a
                href="https://drive.google.com/file/d/1xy69i9nOeiOXiNf01FTKGrkNeqM_ZtYV/view?usp=share_link"
                target="_blank"
              >
                Download resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCollapseList

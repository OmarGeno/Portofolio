import './ResumeCollapseList.css'

function ResumeIconList() {
  return (
    <div className="icon-container">
    <div className="icon-tags">
      <a
        href="https://www.linkedin.com/in/omar-al-taha-4078781b4/"
        target="_blank" rel="noreferrer"
      >
        <img
          src="https://img.icons8.com/color/512/linkedin-2.png"
          alt=""
        />
      </a>
    </div>
    <div className="icon-tags">
      <a href="https://github.com/OmarGeno" target="_blank" rel="noreferrer">
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
          target="_blank" rel="noreferrer"
        >
          Download resume
        </a>
      </button>
    </div>
  </div>
  )
}

export default ResumeIconList
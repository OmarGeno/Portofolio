import './ResumeCollapseList.css'

const ResumeIconList= () => {
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
          href="https://drive.google.com/u/1/uc?id=1C9LGSlUdr63jMEKS4mQfBU-sbCRytyRI&export=download"
          target="_blank" rel="noreferrer"
          download
        >
          Download resume
        </a>
      </button>
    </div>
  </div>
  )
}

export default ResumeIconList
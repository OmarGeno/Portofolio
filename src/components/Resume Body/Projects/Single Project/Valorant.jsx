import './ResumeSingleProject.css'

function Valorant() {
  return (
    <div className="">
    <div className="resume-single__title">Valorant</div><br />
    <div className="resume-single__text">
      Valorant is one of my favorite games, so I decided to make one of my first projects based on the game images. <span><a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Spotify%20Album">see project</a></span>
    </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
          Back to projects
        </a>
      </span><br /><br /><br />
    <div className="resume-single__container">
      <div className="resume-single__div-img">
        <img src="./images/Valo1.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/Valo2.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/Valo3.png" alt="spotify" />
      </div>
      <div className="resume-single__div-img">
        <img src="./images/Valo4.png" alt="spotify" />
      </div>
    </div>
  </div>
  )
}

export default Valorant
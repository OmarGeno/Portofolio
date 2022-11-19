import './ResumeSingleProject.css'


function Arcane() {
  return (
    <div className="">
      <div className="resume-single__title">Arcane album</div><br />
      <div className="resume-single__text">
        Spotify page clone using the React.js library. <span><a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Spotify%20Album">see project</a></span>
      </div>
        <span className="resume-single__text">
          <a href="projects" rel="">
            Back to projects
          </a>
        </span><br /><br /><br />
      <div className="resume-single__container">
        <div className="resume-single__div-img">
          <img src="https://i.ibb.co/0hShMNr/spotify.png" alt="spotify" />
        </div>
        <div className="resume-single__div-img">
          <img src="./images/spotify2.png" alt="spotify" />
        </div>
      </div>
    </div>
  )
}

export default Arcane
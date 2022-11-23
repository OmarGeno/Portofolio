import './ResumeSingleProject.css'
import first from './images/Valo1.png'
import second from './images/Valo2.png'
import third from './images/valo3.png'
import fourth from './images/valo4.png'

function Valorant() {
  const imgs = [`${first}`, `${second}`, `${third}`, `${fourth}`, ];
  return (
    <div className="">
      <div className="resume-single__title">Valorant</div>
      <br />
      <div className="resume-single__text">
        Valorant is one of my favorite games, so I decided to make one of my
        first projects based on the game images.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Spotify%20Album">
            see project
          </a>
        </span>
      </div>
      <span className="resume-single__text">
        <a href="projects" rel="">
      
        </a>
      </span>
      <br />
      <br />
      <br />
      <div className="resume-single__container">
      {
          imgs.map((i) => 
            <div className="resume-single__container-mini">
              <div className="resume-single__div-img">
                <img src={i} alt="materialize " />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Valorant

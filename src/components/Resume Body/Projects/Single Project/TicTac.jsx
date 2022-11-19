import './ResumeSingleProject.css'

function TicTac() {
  return (
    <div className="">
      <div className="resume-single__title">Tic-Tac-Toe</div><br />
      <div className="resume-single__text">
        The tic-tac-toe game application using the ReactJS library.  <span><a href="https://github.com/OmarGeno/My-Projects/tree/Master/React%20JS/Tic%20Tac%20Toe">see project</a></span>
      </div>
        <span className="resume-single__text">
          <a href="projects" rel="">
            Back to projects
          </a>
        </span><br /><br /><br />
      <div className="resume-single__container">
        <div className="resume-single__div-img">
          <img src="./images/tictactoe.png" alt=""/>
        </div>
        <div className="resume-single__div-img">
          <img src="./images/sss.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TicTac

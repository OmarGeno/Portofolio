import './ResumeSingleProject.css'
import first from './images/q1.png'
import second from './images/q2.png'
import fifth from './images/q3.png'
import seventh from './images/q5.png'
import QuizzEffect  from '../../../Letter Effect/Project Effects/QuizzEffect'
 
export const QuizzApp = () => {
  const imgs = [`${first}`, `${fifth}`, `${second}`, `${seventh}`,];
  return (
    <div className="">
      <div className="resume-single__title"><QuizzEffect /></div>
      <br />
      <div className="resume-single__text">
        Quizz application developed using flutter.{' '}
        <span>
          <a href="https://github.com/OmarGeno/Quizz-app-Mobile">
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
              <div className="resume-single__div-img low-opacity">
                <img src={i} alt="materialize "/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
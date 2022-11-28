import './ResumeSingleProject.css'
import first from './images/materializae1.png'
import second from './images/materialize2.png'
import third from './images/Materialize3.png'
import fourth from './images/Materialize4.png'
import fifth from './images/materialize5.png'
import { CampusEffect } from '../../../Letter Effect/Project Effects/CampusEffect'

const Campus = () => {
  const imgs = [`${first}`, `${second}`, `${third}`, `${fourth}`, `${fifth}`,];
  return (
    <div className="">
      <div className="resume-single__title"><CampusEffect/></div>
      <br />
      <div className="resume-single__text">
        A campus page based on the framework Materialize.{' '}
        <span>
          <a href="https://github.com/OmarGeno/My-Projects/tree/Master/Materialize%20Project">
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

export default Campus

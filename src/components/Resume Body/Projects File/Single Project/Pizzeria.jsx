import './ResumeSingleProject.css'
import first from './images/pizza1.png'
import second from './images/pizza2.png'
import fifth from './images/pizza7.png'
import sixth from './images/pizza3.png'
import seventh from './images/pizza4.png'
import eighth from './images/pizza5.png'
import ninth from './images/pizza6.png'
import PizzeriaEffect  from '../../../Letter Effect/Project Effects/PizzeriaEffect'
 
export const Pizzeria = () => {
  const imgs = [`${first}`, `${fifth}`, `${second}`, `${sixth}`, `${seventh}`, `${eighth}`, `${ninth}`];
  return (
    <div className="">
      <div className="resume-single__title"><PizzeriaEffect /></div>
      <br />
      <div className="resume-single__text">
        This page was impelmented to let the user add his skills. This project can be nested within an apllication.{' '}
        <span>
          <a href="https://github.com/OmarGeno/Add-skills">
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
                <img src={i} alt="materialize " />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
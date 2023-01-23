import ResumeProjectComponent from './ResumeProjectComponent'
import './ResumeProjectComponent.css'
import ResumeProjectHeader from './ResumeProjectHeader'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

import first from './Single Project/images/tictactoe.png';
import second from './Single Project/images/spotify.png';
import third from './Single Project/images/materializae1.png';
import fourth from './Single Project/images/exp1.png';
import fifth from './Single Project/images/angularcards.png';
import sixth from './Single Project/images/Valo1.png';
import seventh from './Single Project/images/coffe1.png';
import eighth from './Single Project/images/note1.png';
import ninth from './Single Project/images/skill7.png';
import tenth from './Single Project/images/pizza1.png';
import eleventh from './Single Project/images/angular.png';

const ResumeProjects = () => {
  const cardImages = [
    {
      id: 1,
      image: first,
      title: 'Tic-tac-toe with React',
      link: 'tic-tac',
    },
    {
      id: 2,
      image: second,
      title: 'Spotify with React',
      link: 'arcane',
    },
    {
      id: 3,
      image: third,
      title: 'Campus page with Materialize',
      link: 'campus',
    },
    {
      id: 4,
      image: fourth,
      title: 'Expense Component with React',
      link: 'expense',
    },
    {
      id: 5,
      image: fifth,
      title: 'Business cards with Angular.ts',
      link: 'cards-intro',
    },
    {
      id: 6,
      image: sixth,
      title: 'Valorant Page',
      link: 'valorant',
    },
    {
      id: 7,
      image: seventh,
      title: 'Coffee with materialize',
      link: 'coffee',
    },
    {
      id: 8,
      image: eighth,
      title: 'Notes App using React',
      link: 'notes',
    },
    {
      id: 9,
      image: ninth,
      title: 'Skills using PHP & MySQL',
      link: 'getSkill',
    },
    {
      id: 10,
      image: tenth,
      title: 'Pizza App with .NET core',
      link: 'pizza',
    },
    {
      id: 11,
      image: eleventh,
      title: 'Profile cards with Angular.ts',
      link: 'angular-card',
    },
  ]

  return (
    <>
      <motion.div
        className="container"
        id="projects"
        initial={{}}
        animate={{}}
        exit={{}}
      >
        <ResumeProjectHeader />
        <div className="resume-projects__container">
          {cardImages.map((item) => (
            <ResumeProjectComponent
              image={item.image}
              title={item.title}
              projectLink={item.link}
              key={item.id}
            />
          ))}
        </div>
      </motion.div>
      <Outlet />
    </>
  )
}

export default ResumeProjects

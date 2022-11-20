import ResumeProjectComponent from './ResumeProjectComponent'
import './ResumeProjectComponent.css'
import ResumeProjectHeader from './ResumeProjectHeader'

function ResumeProjects() {
  const cardImages = [
    {
      image: 'https://i.ibb.co/jD6VHN9/tic-tac-toe.png',
      title: 'Tic-tac-toe with React',
      link: '/tic-tac',
    },
    {
      image: 'https://i.ibb.co/0hShMNr/spotify.png',
      title: 'Spotify with React',
      link: '/arcane',
    },
    {
      image: 'https://i.ibb.co/wKx9CWM/materializae-1.png',
      title: 'Campus page with Materialize',
      link: '/campus',
    },
    {
      image: 'https://i.ibb.co/VBy9Cvc/Expense-item.png',
      title: 'Expense Component with React',
      link: '/expense',
    },
    {
      image: 'https://i.ibb.co/Xbb56b5/angular-cards.png',
      title: 'Business cards with Angular.ts',
      link: '/cards-intro',
    },
    {
      image: 'https://i.ibb.co/y4pKnpS/Valo1.png',
      title: 'Valorant Page',
      link: '/valorant',
    },
    {
      image: 'https://i.ibb.co/mNvgcy0/coffee-2.png',
      title: 'Coffee with materialize',
      link: '/coffee',
    },
    {
      image: 'https://i.ibb.co/8jFw7mn/angular.png',
      title: 'Profile cards with Angular.ts',
      link: '/angular-card',
    },
  ]

  return (
    <>
      <div className="container">
        <ResumeProjectHeader />
        <div className="resume-projects__container">
          {cardImages.map((item) => (
            <ResumeProjectComponent
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ResumeProjects

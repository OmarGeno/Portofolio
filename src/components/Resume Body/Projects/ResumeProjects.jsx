import ResumeProjectComponent from './ResumeProjectComponent'
import './ResumeProjectComponent.css'
import ResumeProjectHeader from './ResumeProjectHeader'

function ResumeProjects() {
  const cardImages = [
    {image:'https://i.ibb.co/jD6VHN9/tic-tac-toe.png', title: "Tic-tac-toe with React" , link:"https://ibb.co/bXWH70j"},
    {image:'https://i.ibb.co/0hShMNr/spotify.png', title: "Spotify with React" , link:"https://ibb.co/wMXMWH4"},
    {image:'https://i.ibb.co/wKx9CWM/materializae-1.png', title: "Campus page with Materialize" , link:"https://ibb.co/SK9h0nR"},
    {image:'https://i.ibb.co/VBy9Cvc/Expense-item.png', title: "Expense Component with React" , link:"https://ibb.co/kcnBDhs"},
    {image:'https://i.ibb.co/Xbb56b5/angular-cards.png', title: "Bussines cards with Angular.ts", link:"https://ibb.co/hyydryd"},
    {image:'https://i.ibb.co/y4pKnpS/Valo1.png', title: "Valorant Page", link:"https://ibb.co/RjNtpNy"},
    {image:'https://i.ibb.co/mNvgcy0/coffee-2.png', title: "Coffe with materialize" , link:"https://ibb.co/J3xgspq"},
    {image:'https://i.ibb.co/8jFw7mn/angular.png', title: "Profile cards with Angular.ts" , link:"https://ibb.co/brpVK6j"},
  ]

  return (
    <>
        <div className='container'>
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

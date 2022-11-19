import './ResumeAbout.css'

function ResumeAbout() {
  const aboutMeTitle = 'About me'

  return (
    <div  className="resume-about__container" id="about">
      <div className="resume-about__image">
        <div></div>
      </div>
      <div className="resume-about__text-container">
        <div className="resume-about__title">{aboutMeTitle}</div>
        <br />
        <br />
        <div className="resume-about__text">
          I'm a Full Stack Web Developer located in Romania. I have
          serious passion for entire web development spectrum and working
          everyday to get better.
        </div>
        <div className="resume-about__text">
          I can describe my self as a well-organised person, problem solver,
          independent learner with high attention to the details. Fan of sports,
          outdoor activities, foreign languages, poetry and gaming.
        </div>
        <div className="resume-about__text">
          Interested to fit in new projects with positive people.
        </div>
      </div>
    </div>
  )
}

export default ResumeAbout

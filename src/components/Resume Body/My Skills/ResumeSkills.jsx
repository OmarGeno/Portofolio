import './ResumeSkills.css'
import { motion } from 'framer-motion'

function ResumeSkills() {
  const skillsTitle = 'Skills'

  return (
    <motion.div className="resume-skills__container"  id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="resume-skills__text-container">
        <div className="resume-skills__title">{skillsTitle}</div>
        <br />
        <br />
        <div className="resume-skills__text">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser. Since my journey started in coding, I always tried my
          best to obtain satisfying results for the work.
        </div>
        <div className="resume-skills__text">
          I like to create successful responsive websites that are fast, easy to
          use and built with best practices.
        </div>
        <div className="resume-skills__text">
          The main tools I use in web development are: JavaScript | React JS |
          HTML | CSS | PHP | Git | Bootstrap.
        </div>
        <div className="resume-skills__text">
          Other tools I am familiar with: Node.js | Angular | jQuery |
          Typescript | JSON | Materialize.
        </div>
        <div className="resume-skills__text">
          <pre className="pre-links">
            Visit my{' '}
            <a href="https://www.linkedin.com/in/omar-al-taha-4078781b4/">
              LinkedIn
            </a>{' '}
            profile for more details or just <a href="#contact">contact</a> me.
          </pre>
        </div>
      </div>
      <div className="resume-skills__image">
        <div></div>
      </div>
    </motion.div>
  )
}

export default ResumeSkills

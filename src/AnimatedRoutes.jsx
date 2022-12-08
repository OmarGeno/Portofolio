import ResumeHeader from './components/header/ResumeHeader.jsx'
import ResumeContact from './components/Resume Body/Contact/ResumeContact'
import ResumeSkills from './components/Resume Body/My Skills/ResumeSkills'
import ResumeProjects from './components/Resume Body/Projects File/ResumeProjects'
import TicTac from './components/Resume Body/Projects File/Single Project/TicTac'
import ResumeAbout from './components/Resume Body/Resume About me/ResumeAbout'
import ResumeCollapseList from './components/Resume Body/Navbar/ResumeCollapseList'
import Arcane from './components/Resume Body/Projects File/Single Project/Arcane'
import Campus from './components/Resume Body/Projects File/Single Project/Campus'
import Expense from './components/Resume Body/Projects File/Single Project/Expense'
import BussinessCards from './components/Resume Body/Projects File/Single Project/BussinessCards'
import Valorant from './components/Resume Body/Projects File/Single Project/Valorant'
import Coffee from './components/Resume Body/Projects File/Single Project/Coffee'
import ResumeCards from './components/Resume Body/Projects File/Single Project/ResumeCards'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Addskills } from './components/Resume Body/Projects File/Single Project/Addskills.jsx'
import { Notes } from './components/Resume Body/Projects File/Single Project/Notes.jsx'
// import { ResumeProgressBar } from './components/Resume Body/Navbar/ResumeProgressBar.jsx'

export const AnimatedRoutes = () => {
  const getFromInfo = (contactInfo) => {
    console.log('in main app')
    console.log(contactInfo)
  }

  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <ResumeCollapseList />
        {/* <ResumeProgressBar /> */}
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <ResumeHeader />
                <ResumeAbout />
                <ResumeSkills />
                <ResumeContact contact={getFromInfo} />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <ResumeHeader />
                <ResumeAbout />
                <ResumeSkills />
                <ResumeContact contact={getFromInfo} />
              </>
            }
          />
          <Route path="about" element={<ResumeAbout />} />
          <Route path="skills" element={<ResumeSkills />} />
          <Route path="projects/*" element={<ResumeProjects />}>
            <Route path="tic-tac" element={<TicTac />} />
            <Route path="arcane" element={<Arcane />} />
            <Route path="campus" element={<Campus />} />
            <Route path="expense" element={<Expense />} />
            <Route path="cards-intro" element={<BussinessCards />} />
            <Route path="valorant" element={<Valorant />} />
            <Route path="coffee" element={<Coffee />} />
            <Route path="getSkill" element={<Addskills />} />
            <Route path="angular-card" element={<ResumeCards />} />
            <Route path="notes" element={<Notes />} />
          </Route>
          <Route
            path="contact"
            element={<ResumeContact contact={getFromInfo} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

import { useScroll, useSpring } from 'framer-motion'
import './ResumeCollapseList.css'
import { motion } from 'framer-motion'

export const ResumeProgressBar = () => {
  const [scrollY] = useScroll();
  const scaleX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className="resume-progress__bar" style={{ scaleX }}/>
  )
}

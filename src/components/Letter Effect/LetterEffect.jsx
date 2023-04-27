import './LetterEffect.css'
import '../header/ResumeHeader.css'
import { TextSpan } from './TextSpan'
import { motion } from 'framer-motion'

export const LetterEffect = () => {
  const sentences = ['Hi,', "I'm ", 'O', 'mar, ', 'Software developer']
  const letters = []

  const one = () => {
    for (let i = 0; i < sentences.length; i++) {
      let divideSent = sentences[i]
      letters.push(divideSent.split(''))
    }
  }
  one()

  return (
    <div className="letter-effect__container">
      {letters[0].map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}{' '}
      <br />
      {letters[1].map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}
      {letters[2].map((letter, index) => {
        return (
          <motion.TextSpan key={index} className="text-span o">
            {letter === ' ' ? '\u00A0' : letter}
          </motion.TextSpan>
        )
      })}
      {letters[3].map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}{' '}
      <br />
      {letters[4].map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}
    </div>
  )
}

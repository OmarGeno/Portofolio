import './LetterEffect.css'
import '../header/ResumeHeader.css'
import { TextSpan } from './TextSpan'

export const ProjectsEffect = () => {
  const sentence = 'Projects'.split('')

  return (
    <div
      className="letter-effect__container"
      style={{ fontWeight: 'intial !important' }}
    >
      {sentence.map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}
    </div>
  )
}

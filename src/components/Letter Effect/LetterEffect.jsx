import './LetterEffect.css'
import '../header/ResumeHeader.css'
import { TextSpan } from './TextSpan'

export const LetterEffect = () => {
  const text = (newText) => {
    const sentence = `${newText}`.split('')
    return sentence
  }

  return (
    <div className="letter-effect__container">
      {text("Omar").map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}
    </div>
  )
}

import '../LetterEffect.css'
import '../../header/ResumeHeader.css'
import { TextSpan } from '../TextSpan'

export const BussinessCardsEffect = () => {
  const sentence = 'Business cards'.split('');

  return (
    <div className="letter-effect__container">
      {sentence.map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>
        )
      })}
    </div>
  )
}
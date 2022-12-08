import '../LetterEffect.css'
import '../../header/ResumeHeader.css'
import { TextSpan } from '../TextSpan'

export const NotesEffect = () => {
  const sentence = 'Notes App'.split('');

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
import '../LetterEffect.css'
import '../../header/ResumeHeader.css'
import { TextSpan } from '../TextSpan'

const LogisticsEffect = () => {
    const sentence = 'Logistics Web Application'.split('');

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

export default LogisticsEffect
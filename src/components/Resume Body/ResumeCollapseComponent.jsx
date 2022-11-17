import './ResumeCollapseComponent.css'
import ResumeCollapseComponentInfo from './ResumeCollapseComponentInfo'

function ResumeCollapseComponent(props) {
  return (
    <ResumeCollapseComponentInfo 
    title={props.infos.title}
    introduction={props.infos.introduction}
    brief={props.infos.brief}
    education={props.infos.education}
    languages={props.infos.languages}
    experinece={props.infos.experinece}
    />
  )
}

export default ResumeCollapseComponent
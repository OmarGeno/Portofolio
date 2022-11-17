import React from 'react'
import ResumeIcon from './Icon Component/ResumeIcon'

function ResumeIconInfo(props) {
  return (
    <ResumeIcon
    react={props.icons.react}
    js={props.icons.js}
    angular={props.icons.angular}
    php={props.icons.php}
    ts={props.icons.ts}
    html={props.icons.html}
    css={props.icons.css}
    node={props.icons.node} 
    figma={props.icons.figma} 
    jquery={props.icons.jquery} 
    />
  )
}

export default ResumeIconInfo
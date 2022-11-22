import "./ResumeIcon.css";

function ResumeIcon(props) {
  return (
    <div className="resume-icon__container">
      <div>
        <img src={props.react} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.js} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.angular} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.php} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.ts} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.figma} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.html} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.css} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.jquery} alt="" className="Resume-icon__icon"/>
      </div>
      <div>
        <img src={props.node} alt="" className="Resume-icon__icon"/>
      </div>
    </div>
  );
}

export default ResumeIcon;
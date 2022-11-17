import "./ResumeCollapseComponentInfo.css";

function ResumeCollapseComponentInfo(props) {
  return (
    <div className="resume-collapse__container">
      <div className="resume-collapse__mini-container">
        <h1>{props.title}:</h1>
        <div>
          <p className="font">
            {props.introduction} {props.brief}.
          </p>
          <h2>My studies:</h2>
          <ul className="font">
            <li>{props.education[0]}.</li>
            <li>{props.education[1]}.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumeCollapseComponentInfo;

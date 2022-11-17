import "./ResumeContact.css";
import ResumeForm from "./ResumeForm";

function ResumeContact(props) {
  const intro =
    "I'm interested in ambitious or large projects. However, if you have other requests or questions, don't hesitate to fill in the form below";
  const contactMe = "Contact me";

  const formName = (setName) => {
    const contactInfos = {
      ...setName,
      id: Math.floor(Math.random().toString()),
    };
    console.log(contactInfos);
    props.contact(contactInfos);
  };

  return (
    <div className="resume-contact__container-main" id="contact">
      <div className="resume-contact__form">
        <div className="resume-form__font">{contactMe}</div>
        <br />
        <br />
        <div className="font2">{intro}.</div>
        <br />
        <br />
        <ResumeForm name={formName} />
      </div>
      <div className="resume-contact__image">
        <div></div>
      </div>
    </div>
  );
}

export default ResumeContact;
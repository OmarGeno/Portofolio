import "./ResumeContact.css";
import ResumeForm from "./ResumeForm";
import { motion } from "framer-motion";
import { ContactEffect } from '../../Letter Effect/ContactEffect'

function ResumeContact(props) {
  const intro =
    "I'm interested in ambitious or large projects. However, if you have other requests or questions, don't hesitate to fill in the form below";

  const formName = (setName) => {
    const contactInfos = {
      ...setName,
      id: Math.floor(Math.random().toString()),
    };
    console.log(contactInfos);
    props.contact(contactInfos);
  };

  return (
    <motion.div className="resume-contact__container-main" id="contact" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className="resume-contact__form">
        <div className="resume-form__font"><ContactEffect /></div>
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
    </motion.div>
  );
}

export default ResumeContact;
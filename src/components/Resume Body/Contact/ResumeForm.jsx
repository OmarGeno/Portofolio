import "./ResumeContact.css";
import { useState } from "react";

const ResumeForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getSubject = (e) => {
    setSubject(e.target.value);
  };

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    props.name(formData);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <form action="https://getform.io/f/52db547e-ecde-4a3d-9d8e-6d84e9c42638" method="POST" >
        <div className="resume-contact__container">
          <div className="resume-contact__name">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={getName}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={getEmail}
              value={email}
            />
          </div>
          <div className="resume-contact__subject">
            <input
              type="text"
              placeholder="Subject"
              required
              onChange={getSubject}
              value={subject}
            />
          </div>
          <div className="resume-contact__textarea">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={getMessage}
              value={message}
            ></textarea>
          </div>
          <div className="resume-form__submit">
            <button type="submit" onSubmit={submitHandler}>Send message!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResumeHeader from "./components/header/ResumeHeader.jsx";
import ResumeContact from "./components/Resume Body/Contact/ResumeContact";
import ResumeSkills from "./components/Resume Body/My Skills/ResumeSkills";
import ResumeProjects from "./components/Resume Body/Projects/ResumeProjects";
import ResumeAbout from "./components/Resume Body/Resume About me/ResumeAbout";
import ResumeCollapseList from "./components/Resume Body/ResumeCollapseList";

function App() {
  const getFromInfo = (contactInfo) => {
    console.log("in main app");
    console.log(contactInfo);
  };

  return (
    <div className="main">
        <ResumeCollapseList />
        <Routes>
          <Route path="/" element={<ResumeHeader />} />
          <Route path="/about" element={<ResumeAbout />} />
          <Route path="/skills" element={<ResumeSkills />} />
          <Route path="/projects" element={<ResumeProjects />} />
          <Route path="/contact" element={<ResumeContact contact={getFromInfo} />} />
        </Routes>

        {/* <ResumeHeader /> */}
        {/* <ResumeAbout />
        <ResumeSkills />
        <ResumeProjects />
        <ResumeContact contact={getFromInfo} /> */}
    </div>
  );
}

export default App;

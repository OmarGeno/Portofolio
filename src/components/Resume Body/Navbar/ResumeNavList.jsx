import "./ResumeCollapseList.css";
import { Link, Outlet } from "react-router-dom";

const ResumeNavList = () => {
  const omar = {
    about: "About me",
    work: "Projects",
    skills: "My skills",
    contact: "Contact",
  };
  return (
    <>
      <nav className="resume-collapse__nav">
        <Link
          className="links-nav"
          to="/about"
          smooth={+true}
          offset={50}
          duration={500}
        >
          {omar.about}
        </Link>
        <Link
          className="links-nav"
          to="/skills"
          smooth={+true}
          offset={50}
          duration={500}
        >
          {omar.skills}
        </Link>
        <Link
          className="links-nav"
          to="/contact"
          smooth={+true}
          offset={50}
          duration={500}
        >
          {omar.contact}
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default ResumeNavList;

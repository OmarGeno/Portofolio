// import { useState } from "react";
import "./App.css";
import ResumeHeader from "./components/header/ResumeHeader.jsx";
// import Header from "./components/header/Sidebar/Header";
// import SideBar from "./components/header/Sidebar/SideBar";
import ResumeContact from "./components/Resume Body/Contact/ResumeContact";
import ResumeCollapseList from "./components/Resume Body/ResumeCollapseList";

function App() {
  const infos = {
    title: "About me",
    introduction: "Hello everyone!",
    brief:
      "I always like to offer my passion in learning new things. For me patience is the key to success",
    education: [
      "Master Pharm dgree, University of Medicine and Pharmacy 'Carol Davilla'",
      "Frontend Web Developer, Step It Academy",
    ],
    languages: ["arabic", "english", "romanian"],
    experinece: [
      "Belladonna, Retail Pharmacist",
      "National Medicines Institute, Intership",
    ],
    digital: {
      proficient: ["JavaScript", "React.js", "PHP", "HTML", "CSS", "Bootstrap"],
      begginer: ["Angular", "PHP", "JQuery", "TypeScript", "Node.js"],
      other: ["JSON", "Git", "Materialize"],
    },
    contact: ["LinkedIn", "Github"],
  };

  const icons = {
    react:
      "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    js: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    angular: "https://angular.io/assets/images/logos/angular/angular.png",
    php: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
    ts: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
    figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    html: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png",
    css: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
    node: "https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg",
    jquery:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJEL4F-IqROVTyPGQAosbmqVPxYusr8TWgQ&usqp=CAU",
  };

  const getFromInfo = (contactInfo) => {
    console.log("in main app");
    console.log(contactInfo);
  };

  // const [sidebarOpen, setSideBarOpen] = useState(false);
  // const handleViewSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // };

  return (
    <div className="main">
      <div>
        {/* <div className="sideba">
          <span>
            <Header onClick={handleViewSidebar} />
            <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          </span>
        </div> */}
        <ResumeCollapseList />
        <div className="mobile">
          <ResumeHeader />
        </div>
        <div>
          <ResumeContact contact={getFromInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
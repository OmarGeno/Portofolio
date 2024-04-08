import "./App.css";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6FZpO0rgZng0u_1sFvoxkRPKHGUr5VR8",
  authDomain: "omar-altaha.firebaseapp.com",
  projectId: "omar-altaha",
  storageBucket: "omar-altaha.appspot.com",
  messagingSenderId: "535109324226",
  appId: "1:535109324226:web:66f632bfc1db11f81d1a5b"
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className="main">
      <AnimatedRoutes />
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";
import "./App.css";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

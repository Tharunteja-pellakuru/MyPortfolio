import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import "./App.css";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Profile />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

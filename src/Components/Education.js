import Institute from "../assets/Institute.jpeg";
import College from "../assets/College.png";
import Juniorcollege from "../assets/Juniorcollege.png";
import School from "../assets/School.jpg";
import "./App.css";

const Education = () => {
  return (
    <div id="education" className="education-conatiner">
      <h1 className="section-head"> Education </h1>
      <div className="education-con">
        <div className="edu-container">
          <img className="edu-logo" alt="logo" src={Institute} />
          <div>
            <h6> Full Stack Web Development</h6>
            <p className="course">
              {" "}
              HTML, CSS, JS, React JS, Node JS, Express JS, SQlite.
            </p>
            <p className="skills"> CCBP Nxt Wave </p>
          </div>
        </div>
        <div className="edu-container">
          <img className="edu-logo" alt="logo" src={College} />
          <div>
            <h6> Bachelor Of Technology</h6>
            <p className="course"> Electronics & Communication Engineering </p>
            <p className="skills"> NBKR Institue Of Science & Technology</p>
          </div>
        </div>
        <div className="edu-container">
          <img className="edu-logo" alt="logo" src={Juniorcollege} />
          <div>
            <h6> Intermediate </h6>
            <p className="course"> M.P.C </p>
            <p className="skills"> NBKR Science & Arts College</p>
          </div>
        </div>
        <div className="edu-container">
          <img className="edu-logo" alt="logo" src={School} />
          <div>
            <h6> SSC </h6>
            <p className="course"> 10Th Class </p>
            <p className="skills"> Z P High School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

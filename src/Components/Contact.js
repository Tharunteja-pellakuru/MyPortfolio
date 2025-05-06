import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Resume from "../assets/Tharun_Teja_Pellakuru.pdf";
import "./App.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-icons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pellakurutharunteja@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail title="Email" />
        </a>

        <a
          href="https://github.com/Tharunteja-pellakuru"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub title="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/tharuntejapellakuru"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin title="LinkedIn" />
        </a>

        <a href={Resume} download>
          <FiDownload title="Download Resume" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

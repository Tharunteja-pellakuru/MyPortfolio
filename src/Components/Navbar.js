import { Link } from "react-scroll";
import { useState } from "react";
import Hamburger from "hamburger-react";

import "./App.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="heading">Tharun Teja Pellakuru</h1>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="home" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="education" onClick={handleLinkClick}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" onClick={handleLinkClick}>
            Contact Me
          </Link>
        </li>
      </div>

      <div className="menu">
        <Hamburger
          className="icon"
          toggled={isOpen}
          toggle={setOpen}
          size={24}
        />
      </div>
    </nav>
  );
};

export default Navbar;

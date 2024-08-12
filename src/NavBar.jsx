import { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span>M</span>ohit thakur
        </h1>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          Home
        </Link>
        <Link to="education" smooth={true} duration={500} onClick={closeMenu}>
          Education
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
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
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
}

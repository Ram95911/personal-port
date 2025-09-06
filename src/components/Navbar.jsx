import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar-container">
      {/* Logo scrolls back to top (hero) */}
      <Link to="home" smooth={true} duration={500} offset={-70}>
        <div className="logo-box">
          <h1 className="logo">
            <span className="brackets">&lt;</span> Ram <span className="brackets">/&gt;</span>
          </h1>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="nav-links-box">
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active-link"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

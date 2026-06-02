import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HerSection.css";
import { FaChevronDown } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      {/* <h3>Screen Width: {window.innerWidth}px</h3> */}
      {/* <div className="topbar">
        <div className="top-left">
          <span><FaPhoneAlt /> +91 82475 82810</span>
          <span><FaEnvelope /> info@ambulance.com</span>
          <span><FaMapMarkerAlt /> Punjagutta, Hyderabad</span>
        </div>
      </div> */}

      {/* Navbar */}
      <nav className="navbar">
      <Link to="/" className="logo">
  <img
    src="./assets/pummy.jpg"
    alt="Pummy Ambulance Logo"
  />
  <h3>PUMMY AMBULANCE SERVICE</h3>
</Link>

        <div className="menu-wrapper">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className="services-menu">
  <Link>  Services <FaChevronDown className="dropdown-icon" /></Link>

  <ul className="dropdown">
    <li><Link to="/non-emergency">Non Emergency Ambulance</Link></li>
    <li><Link to="/freezer-ambulance">Ambulance with Freezer</Link></li>
    <li><Link to="/standby-ambulance">Standby Ambulance</Link></li>
    <li><Link to="/road-ambulance">Road Ambulance</Link></li>
    <li><Link to="/medical-equipment">Medical Equipment</Link></li>
    <li><Link to="/body-freezer">Body Freezer Service</Link></li>
  </ul>
</li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <FaBars
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <div className="emergency">
          <FaPhoneAlt />
          <div>
            <small>EMERGENCY CALL 24/7</small>
            <h4>8341408108</h4>
          </div>
        </div>
      </nav>
    </>
  );
}
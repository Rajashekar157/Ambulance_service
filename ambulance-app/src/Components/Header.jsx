import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}

      <Link to="/" className="logo">
        <img
          src="/assets/pummy.jpg"
          alt="Pummy Ambulance"
        />
        <h3>PUMMY AMBULANCE SERVICE</h3>
      </Link>

      {/* Menu */}

      <div className="menu-wrapper">

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}

          <li className="services-menu">

            <div
              className="services-title"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>

              {servicesOpen ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

            {servicesOpen && (

              <ul className="dropdown">

                <li>
                  <Link
                    to="/emergency"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Emergency Ambulance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/non-emergency"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Non Emergency Ambulance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/freezer-ambulance"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Ambulance with Freezer
                  </Link>
                </li>

                <li>
                  <Link
                    to="/standby-ambulance"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Standby Ambulance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/road-ambulance"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Road Ambulance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/medical-equipment"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Medical Equipment
                  </Link>
                </li>

                <li>
                  <Link
                    to="/body-freezer"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Body Freezer Service
                  </Link>
                </li>

              </ul>

            )}

          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Mobile Icon */}

        {menuOpen ? (

          <FaTimes
            className="mobile-menu"
            onClick={() => setMenuOpen(false)}
          />

        ) : (

          <FaBars
            className="mobile-menu"
            onClick={() => setMenuOpen(true)}
          />

        )}

      </div>

      {/* Emergency Call */}

      <div className="emergency">

        <FaPhoneAlt />

        <div>
          <small>EMERGENCY CALL 24/7</small>
          <h4>8341408108</h4>
        </div>

      </div>

    </nav>
  );
}
import "../styles/HerSection.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <img
            src="assets/pummy.jpg"
            alt="logo"
          />

          <p>
            Pummy Ambulance Service is a dedicated emergency support system
            providing fast medical transit across Telangana.
          </p>

          <h4>24/7 Ambulance Services in Hyderabad.</h4>
          <h4>Serving All Over Hyderabad.</h4>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>
<Link to="/non-emergency">› Non Emergency Ambulance</Link>

<Link to="/freezer-ambulance">› Ambulance with Freezer</Link>

<Link to="/standby-ambulance">› Standby Ambulance</Link>

<Link to="/road-ambulance">› Road Ambulance</Link>

<Link to="/medical-equipment">› Medical Equipment</Link>

<Link to="/body-freezer">› Body Freezer Service</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📞 +91 7989827051</p>
          <p>✉ pummyp673@gmail.com</p>
          <p>📍 Punjagutta, Hyderabad, Telangana</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Pummy Ambulance Services. All Rights Reserved.
      </div>

    </footer>
  );
}
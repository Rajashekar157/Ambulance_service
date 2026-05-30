import "../styles/HerSection.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
            alt="logo"
          />

          <p>
            RR Ambulance Service is a dedicated emergency support system
            providing fast medical transit across Telangana.
          </p>

          <h4>24/7 Ambulance Services in Hyderabad.</h4>
          <h4>Serving All Over Hyderabad.</h4>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>

          <ul>
            <li>› Non Emergency Ambulance</li>
            <li>› Ambulance with Freezer</li>
            <li>› Standby Ambulance</li>
            <li>› Road Ambulance</li>
            <li>› Medical Equipment</li>
            <li>› Body Freezer Service</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>

          <p>📞 +91 8247582810</p>
          <p>📞 +91 7989827051</p>
          <p>✉ info@rrambulance.com</p>
          <p>📍 Punjagutta, Hyderabad, Telangana</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 RR Ambulance Services. All Rights Reserved.
      </div>

    </footer>
  );
}
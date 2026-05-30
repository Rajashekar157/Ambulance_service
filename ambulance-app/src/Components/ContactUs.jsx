import Header from "./Header";
import Footer from "./Footer";
import "../styles/ContactUs.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Header />

      {/* Banner */}

      <section className="contact-banner">
        <div className="contact-banner-overlay">

          <h1>Contact Us</h1>

          <p className="banner-text">
            Available 24/7 for ambulance booking, emergency response,
            patient transport, freezer box service and medical equipment support.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="contact-page">

        {/* Left Side */}

        <div className="contact-left">

          <span className="contact-tag">
            24/7 SUPPORT DESK
          </span>

          <h2>Reach Our Dispatch Center</h2>

          <div className="contact-line"></div>

          <p>
            For immediate ambulance dispatch, please call our hotline
            number directly. For general inquiries, equipment reservations,
            or booking schedules, fill out the form and our coordinators
            will reach out shortly.
          </p>

          <div className="info-card">

            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone Support</h3>
              <p>08247582810 (Emergency Helpline)</p>
              <p>+91 8247582810</p>
            </div>

          </div>

          <div className="info-card">

            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email Contact</h3>
              <p>info@rrambulance.com</p>
            </div>

          </div>

          <div className="info-card">

            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Office Location</h3>
              <p>Punjagutta, Hyderabad, Telangana</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-right">

          <h2>Send a Query / Reserve Equipment</h2>

          <form className="contact-form">

            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name *"
              />

              <input
                type="text"
                placeholder="Your Phone *"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
            />

            <select>
              <option>Select Required Service</option>
              <option>Road Ambulance</option>
              <option>ICU Ambulance</option>
              <option>Freezer Box</option>
              <option>Medical Equipment</option>
            </select>

            <textarea
              rows="6"
              placeholder="Type detail descriptions here..."
            ></textarea>

            <button type="submit">
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}
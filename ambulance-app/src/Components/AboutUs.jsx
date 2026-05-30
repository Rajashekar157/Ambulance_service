import Header from "./Header";
import Footer from "./Footer";
import "../styles/AboutUs.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="about-banner">
  <div className="about-banner-overlay">

    <h1>About RR Ambulance Services</h1>

    <p className="banner-text">
      Providing fast, reliable and 24/7 emergency ambulance
      services across Hyderabad with trained medical staff,
      ICU support and advanced life-saving equipment.
    </p>

  </div>
</section>

      {/* Main Content */}
      <section className="about-page">

        <div className="about-left">

          <h2>Welcome to RR Ambulance Services</h2>

          <img
            src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
            alt=""
          />

          <p>
            RR Ambulance Services is a trusted healthcare transportation
            provider headquartered in Hyderabad. Guided by experienced
            medical professionals, we deliver emergency and
            non-emergency ambulance support across the city.
          </p>

          <p>
            Our fleet comprises Basic Life Support (BLS) and Advanced
            Life Support (ALS) ambulances equipped with oxygen support,
            ventilators, cardiac monitors and trained medical staff.
          </p>

          <h3>Our Network & Care System</h3>

          <ul>
            <li>NIMS Hospital</li>
            <li>Osmania General Hospital</li>
            <li>Apollo Hospitals</li>
            <li>AIG Hospitals</li>
            <li>CARE Hospitals</li>
            <li>Continental Hospitals</li>
          </ul>

          <h3>Experienced Paramedical Staff & Drivers</h3>

          <p>
            Every ambulance is operated by certified paramedics and
            experienced drivers trained in emergency response,
            cardiovascular support and critical care transportation.
          </p>

        </div>

        <div className="about-right">

          <div className="service-box">
            <h3>Our Services</h3>

            <div>Non Emergency Ambulance</div>
            <div>Ambulance with Freezer</div>
            <div>Standby Ambulance</div>
            <div>Road Ambulance</div>
            <div>Medical Equipment</div>
            <div>Body Freezer Service</div>
          </div>

          <div className="helpline-box">
            <h3>Need Helpline?</h3>

            <p>
              We are available 24/7 to dispatch ambulances
              anywhere in Hyderabad.
            </p>

            <h2>8247582810</h2>

            <button>
              <FaPhoneAlt /> Call Now
            </button>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
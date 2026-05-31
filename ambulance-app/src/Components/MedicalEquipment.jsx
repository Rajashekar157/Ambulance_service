import Header from "./Header";
import Footer from "./Footer";
import "../styles/MedicalEquipment.css";

export default function MedicalEquipment() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
  className="equipment-hero"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(15,23,42,.80),
        rgba(15,23,42,.80)
      ),
      url('/assets/image7.jpg')
    `
  }}
>
  <div className="equipment-overlay">
    <h1>Medical Equipment Rental Services</h1>

    <p>
      Quality medical equipment available for home care, hospitals,
      recovery support and emergency requirements.
    </p>
  </div>
</section>

      {/* Intro */}
      <section className="equipment-intro">

        <div className="intro-left">
          <span className="equipment-tag">
            AVAILABLE 24/7
          </span>

          <h2>
            Trusted Medical Equipment Solutions
          </h2>

          <p>
            We provide a wide range of medical equipment for rental and
            emergency use. Our equipment is sanitized, tested and ready
            for immediate deployment.
          </p>

          <p>
            Whether you require oxygen concentrators, hospital beds,
            wheelchairs or patient monitors, we deliver quickly to
            your location.
          </p>
        </div>

        <div className="intro-right">
          <img
            src="assets/image7.jpg"
            alt=""
          />
        </div>

      </section>

      {/* Equipment Cards */}

      <section className="equipment-grid">

        <div className="equipment-card">
          <h3>Oxygen Concentrator</h3>
          <p>
            Reliable oxygen support for home and hospital care.
          </p>
        </div>

        <div className="equipment-card">
          <h3>Hospital Bed</h3>
          <p>
            Comfortable adjustable beds for patient recovery.
          </p>
        </div>

        <div className="equipment-card">
          <h3>Wheelchair</h3>
          <p>
            Lightweight and comfortable mobility solutions.
          </p>
        </div>

        <div className="equipment-card">
          <h3>BiPAP Machine</h3>
          <p>
            Respiratory support for patients requiring assisted breathing.
          </p>
        </div>

        <div className="equipment-card">
          <h3>Patient Monitor</h3>
          <p>
            Continuous monitoring of vital health parameters.
          </p>
        </div>

        <div className="equipment-card">
          <h3>Suction Machine</h3>
          <p>
            Advanced suction systems for patient care support.
          </p>
        </div>

      </section>

      {/* Benefits */}

      <section className="benefits-section">

        <h2>Why Choose Our Equipment Services?</h2>

        <div className="benefits-wrapper">

          <div className="benefit-box">
            <span>01</span>
            <h4>Fast Delivery</h4>
          </div>

          <div className="benefit-box">
            <span>02</span>
            <h4>Affordable Pricing</h4>
          </div>

          <div className="benefit-box">
            <span>03</span>
            <h4>24/7 Support</h4>
          </div>

          <div className="benefit-box">
            <span>04</span>
            <h4>Quality Equipment</h4>
          </div>

        </div>

      </section>

      {/* Contact Box */}

      <section className="equipment-contact">

        <div className="contact-card">

          <h2>Need Equipment Immediately?</h2>

          <p>
            Contact our support team for quick delivery and rental assistance.
          </p>

          <h3>+91 8247582810</h3>

            <a href="tel:+918247582810">
    <button>Call Now</button>
  </a>


        </div>

      </section>

      <Footer />
    </>
  );
}
import Header from "./Header";
import Footer from "./Footer";
import "../styles/BodyFreezerService.css";

export default function BodyFreezerService() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="freezer-hero">
        <div className="hero-content">
          <h1>Body Freezer Service</h1>
          <p>
            Safe and hygienic body freezer box rental services available
            24/7 across Hyderabad and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="freezer-service">

        <div className="freezer-image">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="Body Freezer"
          />
        </div>

        <div className="freezer-content">

          <span className="service-label">
            AVAILABLE 24 HOURS
          </span>

          <h2>Reliable Body Freezer Box Rental Service</h2>

          <p>
            We provide modern body freezer boxes designed to preserve
            the deceased safely and respectfully. Our freezer units
            maintain controlled temperatures and are suitable for
            home, hospital and funeral arrangements.
          </p>

          <p>
            Quick delivery, installation and pickup services are
            available throughout Hyderabad.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="freezer-features">

        <div className="feature-card">
          <h3>Temperature Control</h3>
          <p>
            Advanced cooling systems for proper preservation.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>
            Immediate delivery to homes and hospitals.
          </p>
        </div>

        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>
            Round-the-clock assistance whenever required.
          </p>
        </div>

        <div className="feature-card">
          <h3>Affordable Rental</h3>
          <p>
            Flexible rental plans at reasonable prices.
          </p>
        </div>

      </section>

      {/* Process Section */}

      <section className="process-section">

        <h2>How It Works</h2>

        <div className="process-grid">

          <div className="process-box">
            <span>01</span>
            <h4>Call Us</h4>
            <p>Contact our support team anytime.</p>
          </div>

          <div className="process-box">
            <span>02</span>
            <h4>Quick Dispatch</h4>
            <p>Freezer box is delivered immediately.</p>
          </div>

          <div className="process-box">
            <span>03</span>
            <h4>Installation</h4>
            <p>Our staff installs the unit safely.</p>
          </div>

          <div className="process-box">
            <span>04</span>
            <h4>Pickup Service</h4>
            <p>Collection after service completion.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="freezer-cta">

        <h2>Need Body Freezer Box Immediately?</h2>

        <p>
          Our team is available 24/7 for emergency support.
        </p>

        <a href="tel:8247582810">
          Call Now: 8247582810
        </a>

      </section>

      <Footer />
    </>
  );
}
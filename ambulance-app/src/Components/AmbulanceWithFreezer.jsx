import Header from "./Header";
import Footer from "./Footer";
import "../styles/AmbulanceWithFreezer.css";

export default function AmbulanceWithFreezer() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="freezer-banner">
        <div className="freezer-overlay">
          {/* <h1>Freezer Ambulance Service</h1>
          <p>
            Safe, dignified and temperature-controlled transportation services
            available 24/7 across Hyderabad and Telangana.
          </p> */}
        </div>
      </section>

      {/* Main Content */}
      <section className="freezer-container">

        <div className="freezer-left">

          <div className="service-badge">
            AVAILABLE 24/7
          </div>

          <h2>Professional Mortuary & Freezer Ambulance Solutions</h2>

          <img
            src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
            alt="Freezer Ambulance"
          />

          <p>
            Our freezer ambulance services are specially designed for the safe
            preservation and transportation of deceased individuals. We provide
            advanced cooling systems that maintain proper temperatures during
            local and interstate transfers.
          </p>

          <p>
            Every vehicle is sanitized, GPS-enabled, and operated by trained
            personnel who ensure respectful handling and timely delivery to the
            destination.
          </p>

          {/* Features */}
          <div className="feature-grid">

            <div className="feature-card">
              <h4>Temperature Controlled</h4>
              <p>
                Advanced cooling technology helps preserve the body during
                long-distance transportation.
              </p>
            </div>

            <div className="feature-card">
              <h4>24/7 Availability</h4>
              <p>
                Immediate deployment across Hyderabad and neighboring cities.
              </p>
            </div>

            <div className="feature-card">
              <h4>Interstate Transport</h4>
              <p>
                Support for transportation across Telangana, Andhra Pradesh
                and other states.
              </p>
            </div>

            <div className="feature-card">
              <h4>Documentation Help</h4>
              <p>
                Assistance with permits and required transportation documents.
              </p>
            </div>

          </div>

          <h3>Why Families Choose Our Freezer Ambulance Service</h3>

          <ul className="benefit-list">
            <li>Modern freezer units with stable temperature control.</li>
            <li>Professional and respectful staff support.</li>
            <li>Affordable pricing with transparent charges.</li>
            <li>Fast response and dispatch services.</li>
            <li>Long-distance and interstate transportation available.</li>
            <li>Clean and well-maintained vehicles.</li>
          </ul>

        </div>

        {/* Right Sidebar */}
        <div className="freezer-right">

          <div className="info-box">
            <h3>Service Highlights</h3>

            <div className="info-item">
              ✓ Local & Interstate Transport
            </div>

            <div className="info-item">
              ✓ Temperature Controlled Units
            </div>

            <div className="info-item">
              ✓ Trained Support Staff
            </div>

            <div className="info-item">
              ✓ 24/7 Emergency Availability
            </div>

            <div className="info-item">
              ✓ Immediate Dispatch
            </div>
          </div>

          <div className="help-box">
            <h3>Need Immediate Assistance?</h3>

            <p>
              Our coordination team is available round the clock to arrange
              freezer ambulance transportation quickly and efficiently.
            </p>

            <h2>08125078218</h2>

            <button>Call Now</button>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
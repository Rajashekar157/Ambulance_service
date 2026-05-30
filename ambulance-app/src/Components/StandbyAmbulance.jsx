import Header from "./Header";
import Footer from "./Footer";
import "../styles/StandbyAmbulance.css";

export default function StandbyAmbulance() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="standby-banner"></section>

      {/* Content */}
      <section className="standby-container">

        <div className="standby-left">

          <span className="service-tag">
            EVENT & EMERGENCY COVERAGE
          </span>

          <h2>Professional Standby Ambulance Services</h2>

          <img
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41"
            alt="Standby Ambulance"
          />

          <p>
            Our Standby Ambulance Service provides immediate medical readiness
            for events, corporate gatherings, construction sites, educational
            institutions, sports tournaments, religious programs, and public
            functions.
          </p>

          <p>
            Equipped with trained paramedics, oxygen support systems, and
            emergency medical equipment, our ambulances remain on-site to
            ensure rapid response whenever required.
          </p>

          <div className="standby-cards">

            <div className="standby-card">
              <h4>Corporate Events</h4>
              <p>
                Medical support for conferences, meetings, and company events.
              </p>
            </div>

            <div className="standby-card">
              <h4>Sports Coverage</h4>
              <p>
                Ambulance deployment for tournaments and athletic competitions.
              </p>
            </div>

            <div className="standby-card">
              <h4>Construction Sites</h4>
              <p>
                Emergency preparedness for workers and industrial locations.
              </p>
            </div>

            <div className="standby-card">
              <h4>Public Gatherings</h4>
              <p>
                Medical readiness for festivals, rallies, and large crowds.
              </p>
            </div>

          </div>

          <h3>Why Choose Our Standby Ambulance?</h3>

          <ul className="standby-list">
            <li>24/7 emergency medical support.</li>
            <li>Experienced paramedics and drivers.</li>
            <li>Fully equipped ambulances.</li>
            <li>Quick patient stabilization.</li>
            <li>Affordable standby packages.</li>
            <li>Coverage across Hyderabad & Telangana.</li>
          </ul>

        </div>

        {/* Right Side */}
        <div className="standby-right">

          <div className="service-info-box">
            <h3>Standby Coverage</h3>

            <div>✓ Corporate Events</div>
            <div>✓ Sports Events</div>
            <div>✓ Schools & Colleges</div>
            <div>✓ Construction Sites</div>
            <div>✓ Public Functions</div>
            <div>✓ VIP Events</div>
          </div>

          <div className="emergency-box">
            <h3>Book Ambulance Standby</h3>

            <p>
              Reserve an ambulance with trained staff for your event or
              workplace.
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
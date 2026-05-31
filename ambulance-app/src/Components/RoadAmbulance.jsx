import Header from "./Header";
import Footer from "./Footer";
import "../styles/RoadAmbulance.css";

export default function RoadAmbulance() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section
  className="road-banner"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(2,33,62,.70),
        rgba(2,33,62,.70)
      ),
      url('/assets/fleet2.jpg')
    `
  }}
>
  <div className="road-overlay">
    <span>24/7 Emergency Response</span>
    <h1>Road Ambulance Service</h1>
  </div>
</section>

      {/* Intro */}
      <section className="road-intro">

        <div className="road-content">
          <h2>Fast Medical Transportation Across Cities</h2>

          <p>
            Our Road Ambulance Service provides rapid emergency and
            non-emergency transportation for patients requiring safe travel
            between hospitals, homes, rehabilitation centers, and medical
            facilities.
          </p>

          <p>
            Equipped with oxygen support, monitoring systems, emergency
            medicines, and trained medical staff, our ambulances ensure patient
            comfort and safety throughout the journey.
          </p>
        </div>

        <div className="road-image">
          <img
            src="assets/fleet3.jpg"
            alt=""
          />
        </div>

      </section>

      {/* Stats */}
      <section className="road-stats">

        <div className="stat-box">
          <h3>5000+</h3>
          <p>Patients Transported</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Emergency Support</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Medical Staff</p>
        </div>

        <div className="stat-box">
          <h3>100%</h3>
          <p>Response Commitment</p>
        </div>

      </section>

      {/* Timeline Style */}
      <section className="journey-section">

        <h2>How Our Service Works</h2>

        <div className="timeline">

          <div className="step">
            <div className="circle">1</div>
            <div>
              <h4>Call & Booking</h4>
              <p>
                Share patient location and destination details.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <div>
              <h4>Ambulance Dispatch</h4>
              <p>
                Nearest ambulance is assigned immediately.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <div>
              <h4>Patient Care</h4>
              <p>
                Medical team stabilizes and monitors the patient.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <div>
              <h4>Safe Transport</h4>
              <p>
                Patient is transferred securely to destination.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Coverage */}
      <section className="coverage">

        <h2>Coverage Areas</h2>

        <div className="coverage-grid">

          <div>Hyderabad</div>
          <div>Secunderabad</div>
          <div>Warangal</div>
          <div>Nizamabad</div>
          <div>Karimnagar</div>
          <div>Khammam</div>
          <div>Vijayawada</div>
          <div>Visakhapatnam</div>

        </div>

      </section>

      {/* CTA */}
      <section className="road-cta">

        <h2>Need Immediate Ambulance Assistance?</h2>

        <p>
          Our emergency dispatch team is available 24/7.
        </p>

        <a href="tel:08125078218">
          Call 08125078218
        </a>

      </section>

      <Footer />
    </>
  );
}
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Emergency.css";

export default function Emergency() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section
        className="emergency-banner"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(220,38,38,.75),
              rgba(220,38,38,.75)
            ),
            url('/assets/image4.jpg')
          `
        }}
      >
        <div className="emergency-overlay">

          <span className="emergency-badge">
            24/7 Emergency Response
          </span>

          <h1>Emergency Ambulance Service</h1>

          <p>
            Rapid emergency medical transportation with
            trained paramedics, oxygen support, ICU equipment,
            and life-saving care.
          </p>

        </div>
      </section>

      <section className="emergency-page">

        <div className="emergency-left">

          <div className="emergency-image-card">
            <img
              src="/assets/image4.jpg"
              alt="Emergency Ambulance"
            />
          </div>

          <div className="emergency-content-card">

            <h2>Immediate Medical Assistance When Every Second Matters</h2>

            <p>
              Our Emergency Ambulance Service is available 24/7
              across Hyderabad to provide fast and reliable
              transportation during medical emergencies.
            </p>

            <p>
              Equipped with advanced life support systems,
              oxygen cylinders, monitors, and trained emergency
              staff, our ambulances are ready to respond quickly.
            </p>

            <div className="highlight-box">
              <h3>Emergency Situations We Handle</h3>

              <ul>
                <li>Heart Attack & Cardiac Emergencies</li>
                <li>Road Accident Cases</li>
                <li>Stroke & Neurological Emergencies</li>
                <li>Critical ICU Transfers</li>
                <li>Breathing Difficulties</li>
                <li>Emergency Patient Transport</li>
              </ul>
            </div>

            <h3>Emergency Service Features</h3>

            <div className="benefits-grid">

              <div className="benefit-card">
                <h4>Fast Response</h4>
                <p>Quick ambulance dispatch across Hyderabad.</p>
              </div>

              <div className="benefit-card">
                <h4>ICU Equipment</h4>
                <p>Ventilator, monitor and oxygen support.</p>
              </div>

              <div className="benefit-card">
                <h4>Expert Team</h4>
                <p>Certified paramedics and trained drivers.</p>
              </div>

              <div className="benefit-card">
                <h4>24/7 Availability</h4>
                <p>Round-the-clock emergency medical support.</p>
              </div>

            </div>

          </div>

        </div>

        <div className="emergency-right">

          <div className="service-list-box">
            <h3>Emergency Services</h3>

            <div>✓ Cardiac Ambulance</div>
            <div>✓ ICU Ambulance</div>
            <div>✓ Oxygen Ambulance</div>
            <div>✓ Accident Ambulance</div>
            <div>✓ Critical Care Transfer</div>
          </div>

          <div className="call-box">

            <span className="call-badge">
              Emergency Helpline
            </span>

            <h3>Need Immediate Help?</h3>

            <p>
              Call now for instant ambulance dispatch.
            </p>

            <div className="phone-box">
              📞 8341408108
            </div>

            <a
              href="tel:+918341408108"
              className="call-now-btn"
            >
              Call Emergency Ambulance
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
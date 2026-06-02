import Header from "./Header";
import Footer from "./Footer";
import "../styles/NonEmergency.css";

export default function NonEmergency() {
  return (
    <>
      <Header />

      {/* Banner */}
    <section
  className="service-banner"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(15,60,104,.75),
        rgba(15,60,104,.75)
      ),
      url('/assets/image1.jpg')
    `
  }}
>
<div className="service-overlay">

  <span className="service-badge">
    24/7 Ambulance Support
  </span>

  <h1>Non Emergency Ambulance Service</h1>

  <p>
    Safe, comfortable and reliable patient transportation
    across Hyderabad with trained staff and modern vehicles.
  </p>

</div>
</section>
      {/* Content */}
      <section className="service-page">

        <div className="service-left">

          <div className="service-image-card">
            <img
              src="assets/image4.jpg"
              alt=""
            />
          </div>

          <div className="service-content-card">
            <h2>Reliable Patient Transportation</h2>

            <p>
              Our Non-Emergency Ambulance service is designed for patients
              who require safe transportation without urgent medical
              intervention. We provide professional support for hospital
              visits, discharge transfers, routine checkups and long-distance
              travel.
            </p>

            <p>
              Every vehicle is maintained to hospital-grade standards and
              operated by trained drivers and support staff to ensure
              patient comfort throughout the journey.
            </p>

            <div className="highlight-box">
              <h3>Who Can Use This Service?</h3>

              <ul>
                <li>Elderly patient transportation</li>
                <li>Routine hospital appointments</li>
                <li>Dialysis patient transfers</li>
                <li>Hospital discharge services</li>
                <li>Inter-city medical travel</li>
                <li>Wheelchair patient transportation</li>
              </ul>
            </div>

            <h3>Key Benefits</h3>

            <div className="benefits-grid">

              <div className="benefit-card">
                <h4>24/7 Availability</h4>
                <p>Book transportation anytime across Hyderabad.</p>
              </div>

              <div className="benefit-card">
                <h4>Comfort Travel</h4>
                <p>Clean ambulances with comfortable patient support.</p>
              </div>

              <div className="benefit-card">
                <h4>Experienced Team</h4>
                <p>Professional drivers and medical attendants.</p>
              </div>

              <div className="benefit-card">
                <h4>Affordable Pricing</h4>
                <p>Transparent pricing without hidden charges.</p>
              </div>

            </div>

            <div className="faq-mini">
              <h3>Why Choose Us?</h3>

              <p>
                We focus on patient safety, punctuality and comfort. Our
                fleet is equipped to handle routine patient transportation
                with professionalism and care.
              </p>
            </div>

          </div>

        </div>

        {/* Sidebar */}
        <div className="service-right">

          <div className="service-list-box">
            <h3>Our Services</h3>

            <a href="/">Non Emergency Ambulance</a>
            <a href="/">Ambulance with Freezer</a>
            <a href="/">Standby Ambulance</a>
            <a href="/">Road Ambulance</a>
            <a href="/">Medical Equipment</a>
            <a href="/">Body Freezer Service</a>
          </div>

       <div className="call-box">

  <span className="call-badge">
    24/7 Emergency Support
  </span>

  <h3>Need an Ambulance?</h3>

  <p>
    Fast response across Hyderabad.
    ICU, BLS, ALS and Patient Transport.
  </p>

  <div className="phone-box">
    📞 +91 83414 08108
  </div>

  <a
    href="tel:+918341408108"
    className="call-now-btn"
  >
    Call Ambulance
  </a>

</div>
        </div>

      </section>

      <Footer />
    </>
  );
}
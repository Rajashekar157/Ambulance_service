// import { useState } from "react";
import "../styles/HerSection.css";
// import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
    FaPhoneAlt,
    FaWhatsapp,
    // FaEnvelope,
    // FaMapMarkerAlt,
    FaCalendarAlt,
    FaAmbulance,
    // FaBars
} from "react-icons/fa";

export default function HeroSection() {
    // const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="hero">
                <div className="overlay"></div>

                <div className="hero-content">

                    <h1>
                        24/7 Emergency <br />
                        Ambulance Services in Hyderabad
                    </h1>

                    <p>
                        Reliable, Fast & Trusted Ambulance Services Across Hyderabad.
                        We provide quick dispatch with advanced life support,
                        ventilators and professional medical staff.
                    </p>

                    <div className="hero-buttons">
                        <button className="call-btn">
                            <FaPhoneAlt /> Call Now: 08247582810
                        </button>

                        <button className="book-btn">
                            <FaCalendarAlt /> Book Online
                        </button>
                    </div>

                    {/* Helpline Card */}
                    <div className="helpline-card">
                        <div className="help-left">
                            <FaAmbulance className="ambulance-icon" />

                            <div>
                                <h2>Ambulance Helpline 24x7</h2>
                                <p>
                                    Immediate response in case of emergency across Hyderabad
                                </p>
                            </div>
                        </div>

                        <button className="help-btn">
                            <FaPhoneAlt /> Call: 08247582810
                        </button>
                    </div>
                </div>

                {/* Floating Buttons */}
                <div className="floating-buttons">
                    <a href="/">
                        <FaWhatsapp />
                    </a>

                    <a href="/">
                        <FaPhoneAlt />
                    </a>
                </div>
            </section>

            {/* ABOUT SECTION */}

            <section className="about-section">

                <div className="about-image">

                    <img
                        src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
                        alt="Ambulance"
                    />

                    <div className="experience-box">
                        <h2>10+</h2>
                        <p>YEARS OF SERVICE</p>
                    </div>

                </div>

                <div className="about-content">

                    <span className="about-tag">
                        ABOUT OUR SERVICE
                    </span>

                    <h2>
                        Trusted Medical Transportation Team
                    </h2>

                    <div className="about-line"></div>

                    <p>
                        RR Ambulance Service is one of the leading emergency medical
                        transportation providers in Hyderabad. We offer fast response,
                        patient transfers, ICU ambulance support and trained staff.
                    </p>

                    <p>
                        Our ambulances are equipped with oxygen support, ventilators,
                        cardiac monitoring systems and emergency care equipment for
                        critical situations.
                    </p>

                    <div className="features">

                        <div className="feature-item">
                            ✓ Doctor-Led Guidance
                        </div>

                        <div className="feature-item">
                            ✓ Experienced Drivers
                        </div>

                        <div className="feature-item">
                            ✓ ICU Ventilator Fitted
                        </div>

                        <div className="feature-item">
                            ✓ 24/7 Dispatch Control
                        </div>

                    </div>

                </div>

            </section>

            {/* SERVICES SECTION */}

            <section className="services-section">

                <div className="section-header">
                    <span>WHAT WE DO</span>
                    <h2>Our Specialized Ambulance Services</h2>
                    <div className="service-line"></div>
                </div>

                <div className="services-grid">

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1587745416684-47953f16f02f" alt="" />
                        <div className="service-content">
                            <h3>Non Emergency Ambulance</h3>
                            <p>
                                Safe and comfortable transportation for clinic visits,
                                dialysis appointments and patient transfers.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907" alt="" />
                        <div className="service-content">
                            <h3>Ambulance With Freezer</h3>
                            <p>
                                Temperature-controlled transit units for respectful
                                long-distance transportation.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" alt="" />
                        <div className="service-content">
                            <h3>Standby Ambulance</h3>
                            <p>
                                On-site standby ambulance support for events,
                                functions and public gatherings.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1587745416684-47953f16f02f" alt="" />
                        <div className="service-content">
                            <h3>Road Ambulance</h3>
                            <p>
                                Fully equipped ambulance vehicles with oxygen,
                                ventilator and emergency support.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309" alt="" />
                        <div className="service-content">
                            <h3>Medical Equipment</h3>
                            <p>
                                Rent-ready oxygen cylinders, beds, wheelchairs
                                and healthcare equipment.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309" alt="" />
                        <div className="service-content">
                            <h3>Body Freezer Service</h3>
                            <p>
                                High-quality stainless steel body freezer units
                                available for home delivery.
                            </p>
                            <a href="/">Read More →</a>
                        </div>
                    </div>

                </div>

            </section>

            {/* WHY CHOOSE US */}

            <section className="why-section">

                <div className="why-left">

                    <span className="why-tag">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        Setting Standards in Emergency Transportation
                    </h2>

                    <div className="why-line"></div>

                    <p>
                        We understand that during critical medical situations,
                        every second counts. Our ambulance services ensure
                        quick response and patient safety.
                    </p>

                    <div className="why-card">
                        <h3>10 Mins Reach Location</h3>
                        <p>
                            Our strategically positioned ambulances allow us
                            to reach your location quickly.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>10 Seconds Response</h3>
                        <p>
                            Our helpline team answers calls instantly and
                            dispatches ambulances immediately.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Advanced Medical Gear</h3>
                        <p>
                            Equipped with ventilators, oxygen systems,
                            monitors and emergency equipment.
                        </p>
                    </div>

                </div>

                <div className="why-right">

                    <div className="stat-card blue">
                        <h2>10M</h2>
                        <p>REACH TIME</p>
                    </div>

                    <div className="stat-card orange">
                        <h2>24/7</h2>
                        <p>AVAILABILITY</p>
                    </div>

                    <div className="stat-card blue">
                        <h2>15K+</h2>
                        <p>SUCCESSFUL TRANSFERS</p>
                    </div>

                    <div className="stat-card orange">
                        <h2>100%</h2>
                        <p>SAFE REACH RATE</p>
                    </div>

                </div>

            </section>
            {/* EMERGENCY CTA */}

            <section className="cta-section">

                <div className="cta-overlay">

                    <h2>
                        Need Urgent Assistance? We are Ready 24/7
                    </h2>

                    <p>
                        Our dedicated ambulance coordinators and medical staff
                        are available 24 hours a day, 365 days a year.
                    </p>

                    <button className="cta-btn">
                        <FaPhoneAlt /> Call Helpline Now: 8247582810
                    </button>

                </div>

            </section>

            {/* REACH SECTION */}

            <section className="reach-section">

                <div className="section-header">
                    <span>OUR REACH</span>
                    <h2>Serving All Over Hyderabad</h2>
                    <div className="service-line"></div>

                    <p>
                        We provide rapid response emergency ambulance services
                        across all major locations in Hyderabad and Secunderabad.
                    </p>
                </div>

                <div className="reach-grid">

                    <div className="reach-card">📍 Punjagutta</div>
                    <div className="reach-card">📍 Banjara Hills</div>
                    <div className="reach-card">📍 Jubilee Hills</div>
                    <div className="reach-card">📍 Gachibowli</div>

                    <div className="reach-card">📍 Madhapur</div>
                    <div className="reach-card">📍 Secunderabad</div>
                    <div className="reach-card">📍 Kukatpally</div>
                    <div className="reach-card">📍 Miyapur</div>

                    <div className="reach-card">📍 LB Nagar</div>
                    <div className="reach-card">📍 Ameerpet</div>
                    <div className="reach-card">📍 Begumpet</div>
                    <div className="reach-card">📍 Hitech City</div>

                </div>

            </section>
            {/* REVIEW SECTION */}

            <section className="review-section">

                <div className="section-header">
                    <span>REVIEWS</span>
                    <h2>What Our Patients' Families Say</h2>
                    <div className="service-line"></div>
                </div>

                <div className="review-grid">

                    <div className="review-card">
                        <div className="stars">★★★★★</div>

                        <p>
                            Excellent service. Ambulance arrived within minutes
                            and the staff handled everything professionally.
                        </p>

                        <div className="review-user">
                            <div className="avatar">RK</div>

                            <div>
                                <h4>Ramesh Kumar</h4>
                                <span>Secunderabad</span>
                            </div>
                        </div>
                    </div>

                    <div className="review-card">
                        <div className="stars">★★★★★</div>

                        <p>
                            Very quick emergency response and oxygen support
                            was ready before reaching the hospital.
                        </p>

                        <div className="review-user">
                            <div className="avatar">SN</div>

                            <div>
                                <h4>Srinivas Naidu</h4>
                                <span>Madhapur</span>
                            </div>
                        </div>
                    </div>

                    <div className="review-card">
                        <div className="stars">★★★★★</div>

                        <p>
                            Highly recommended. Staff was respectful and
                            pricing was transparent.
                        </p>

                        <div className="review-user">
                            <div className="avatar">PR</div>

                            <div>
                                <h4>Praveen Reddy</h4>
                                <span>Kukatpally</span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            {/* GALLERY SECTION */}

            <section className="gallery-section">

                <div className="section-header">
                    <span>PHOTOS</span>
                    <h2>Our Ambulance Fleet Gallery</h2>
                    <div className="service-line"></div>
                </div>

                <div className="gallery-grid">

                    <img
                        src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                        alt=""
                    />

                    <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
                        alt="Healthcare"
                    />
                </div>

            </section>
            {/* FAQ SECTION */}

            <section className="faq-section">

                <div className="section-header">
                    <span>HELP DESK</span>
                    <h2>Frequently Asked Questions</h2>
                    <div className="service-line"></div>
                </div>

                <div className="faq-container">

                    <details open>
                        <summary>
                            How can I book an ambulance?
                        </summary>

                        <p>
                            You can instantly book our ambulance by calling
                            +91 82475 82810. We are available 24/7 for emergency
                            and scheduled patient transfers.
                        </p>
                    </details>

                    <details>
                        <summary>
                            What is the average response time?
                        </summary>

                        <p>
                            Our ambulances generally reach within
                            10 to 30 minutes depending on location.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Do you provide ICU Ambulance Services?
                        </summary>

                        <p>
                            Yes. Our ICU ambulances include oxygen support,
                            ventilators and trained paramedics.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Do you provide freezer box services?
                        </summary>

                        <p>
                            Yes. We provide freezer box rental services
                            throughout Hyderabad and nearby areas.
                        </p>
                    </details>

                </div>

            </section>

            {/* CONTACT SECTION */}

            <section className="contact-section">

                <div className="contact-left">

                    <span className="contact-tag">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Emergency Contact Details
                    </h2>

                    <div className="service-line"></div>

                    <p>
                        Reach us anytime for ambulance booking,
                        patient transfer, ICU ambulance support,
                        and emergency transportation.
                    </p>

                    <div className="contact-card">
                        <h3>📞 Phone Number</h3>
                        <p>+91 82475 82810</p>
                        <p>24/7 Emergency Hotline</p>
                    </div>

                    <div className="contact-card">
                        <h3>✉️ Support Email</h3>
                        <p>info@rrambulance.com</p>
                    </div>

                    <div className="contact-card">
                        <h3>📍 Location Center</h3>
                        <p>Punjagutta, Hyderabad</p>
                    </div>

                </div>

                <div className="contact-right">

                    <h2>Request Ambulance Booking</h2>

                    <form className="booking-form">

                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Your Name"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <select>
                            <option>Select Required Service</option>
                            <option>ICU Ambulance</option>
                            <option>Road Ambulance</option>
                            <option>Freezer Box</option>
                            <option>Medical Equipment</option>
                        </select>

                        <textarea
                            rows="6"
                            placeholder="Describe your requirement..."
                        ></textarea>

                        <button type="submit">
                            Submit Booking Request
                        </button>

                    </form>

                </div>

            </section>
            <Footer />
        </>

    );
}
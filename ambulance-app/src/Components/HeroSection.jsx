import "../styles/HerSection.css";
import Header from "./Header";
import Footer from "./Footer";
import {
    FaPhoneAlt,
    FaCalendarAlt,
    FaAmbulance,
} from "react-icons/fa";

export default function HeroSection() {
    return (
        <>
            <Header />
           <section className="hero">

    <img
        src="/assets/image1.jpg"
        alt="Medical Transport"
        className="hero-bg-image"
    />

    <div className="overlay"></div>

    <div className="hero-content">

        <span className="hero-tag">
            PROFESSIONAL MEDICAL TRANSPORT
        </span>

        <h1>
            Advanced Patient Care
            <br />
            During Every Journey
        </h1>

        <p>
            We provide dependable medical transportation,
            critical care support, and patient mobility solutions
            designed to ensure comfort, safety, and timely assistance.
        </p>

        <div className="hero-buttons">

         <a href="tel:+917989827051" className="call-btn">
    <FaPhoneAlt />
    Contact Support
</a>

            <button className="book-btn">
                <FaCalendarAlt />
                Schedule Service
            </button>

        </div>

        <div className="helpline-card">

            <div className="help-left">

                <FaAmbulance className="ambulance-icon" />

                <div>
                    <h2>24/7 Support Center</h2>
                    <p>
                        Dedicated coordination team available around the clock
                    </p>
                </div>

            </div>

            <button className="help-btn">
                Request Assistance
            </button>

        </div>

    </div>

</section>


            {/* ABOUT SECTION */}

           <section className="about-section">

    <div className="about-image">

        <img
            src="/assets/image2.jpg"
            alt="Medical Support Team"
        />

        <div className="experience-box">
            <h2>12+</h2>
            <p>YEARS EXPERIENCE</p>
        </div>

    </div>

    <div className="about-content">

        <span className="about-tag">
            WHO WE ARE
        </span>

        <h2>
            Dedicated Pummy Transportation Solutions
        </h2>

        <div className="about-line"></div>

        <p>
            Our organization specializes in patient transportation,
            Pummy logistics, and medical mobility services
            across urban and rural locations.
        </p>

        <p>
            With trained professionals and modern transport
            facilities, we focus on safety, reliability, and
            compassionate service.
        </p>

        <div className="features">

            <div className="feature-item">
                ✓ Certified Medical Staff
            </div>

            <div className="feature-item">
                ✓ Real-Time GPS Tracking
            </div>

            <div className="feature-item">
                ✓ Advanced Care Equipment
            </div>

            <div className="feature-item">
                ✓ 24/7 Service Operations
            </div>

        </div>

    </div>

</section>




            {/* SERVICES SECTION */}
<section className="services-section">

    <div className="section-header">

        <span>OUR SOLUTIONS</span>

        <h2>
            Pummy Transportation Services
        </h2>

        <div className="service-line"></div>

    </div>

    <div className="services-grid">

        <div className="service-card">

            <img
                src="/assets/image1.jpg"
                alt="Patient Transfer"
            />

            <div className="service-content">

                <h3>Patient Transfer</h3>

                <p>
                    Safe and comfortable transportation between
                    hospitals, clinics, and care facilities.
                </p>

                <a href="/">
                    Learn More →
                </a>

            </div>

        </div>

        <div className="service-card">

            <img
                src="/assets/image2.jpg"
                alt="Critical Care"
            />

            <div className="service-content">

                <h3>Critical Care Support</h3>

                <p>
                    Specialized transportation equipped with
                    advanced monitoring and care systems.
                </p>

                <a href="/">
                    Learn More →
                </a>

            </div>

        </div>

        <div className="service-card">

            <img
                src="/assets/image3.jpg"
                alt="Medical Events"
            />

            <div className="service-content">

                <h3>Medical Event Coverage</h3>

                <p>
                    On-site medical support and standby units
                    for public and private events.
                </p>

                <a href="/">
                    Learn More →
                </a>

            </div>

        </div>

        <div className="service-card">

            <img
                src="/assets/image4.jpg"
                alt="Equipment"
            />

            <div className="service-content">

                <h3>Equipment Logistics</h3>

                <p>
                    Transportation and delivery of essential
                    Pummy equipment and supplies.
                </p>

                <a href="/">
                    Learn More →
                </a>

            </div>

        </div>

        <div className="service-card">

            <img
                src="/assets/image5.jpg"
                alt="Home Care"
            />

            <div className="service-content">

                <h3>Home Care Transport</h3>

                <p>
                    Convenient transportation for routine
                    appointments and home Pummy visits.
                </p>

                <a href="/">
                    Learn More →
                </a>

            </div>

        </div>

        <div className="service-card">

            <img
                src="/assets/image6.jpg"
                alt="Corporate"
            />

            <div className="service-content">

                <h3>Corporate Medical Assistance</h3>

                <p>
                    Pummy mobility solutions for businesses,
                    institutions, and organizations.
                </p>

                <a href="/">
                    Learn More →
                </a>

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
            Why Thousands Trust
            <br />
            Our Medical Services
        </h2>

        <div className="why-line"></div>

        <p>
            We provide reliable medical transportation with a strong
            focus on patient safety, quick response, and professional care.
        </p>

        <div className="why-features">

            <div className="why-feature">
                ⚡ Fast Response Team
            </div>

            <div className="why-feature">
                👨‍⚕️ Experienced Staff
            </div>

            <div className="why-feature">
                🚑 Advanced Ambulances
            </div>

            <div className="why-feature">
                🛡️ Safe Patient Transport
            </div>

            <div className="why-feature">
                📍 GPS Tracking
            </div>

            <div className="why-feature">
                ⏰ 24/7 Availability
            </div>

        </div>

    </div>

    <div className="why-right">

        <div className="stat-card">
            <h2>5000+</h2>
            <p>Patients Served</p>
        </div>

        <div className="stat-card">
            <h2>24/7</h2>
            <p>Support Team</p>
        </div>

        <div className="stat-card">
            <h2>50+</h2>
            <p>Vehicles</p>
        </div>

        <div className="stat-card">
            <h2>98%</h2>
            <p>Satisfaction</p>
        </div>

    </div>

</section>


<section className="reach-section">

    <div className="section-header">
        <span>OUR COVERAGE</span>

        <h2>
            Serving All Over Hyderabad
        </h2>

        <div className="service-line"></div>

        <p>
            We provide rapid response emergency ambulance services
            across all major locations in Hyderabad and Secunderabad.
        </p>
    </div>

    <div className="location-slider">

        <div className="location-track">

            <div className="location-card"> Punjagutta</div>
            <div className="location-card"> Banjara Hills</div>
            <div className="location-card"> Jubilee Hills</div>
            <div className="location-card"> Gachibowli</div>
            <div className="location-card"> Madhapur</div>
            <div className="location-card"> Secunderabad</div>
            <div className="location-card"> Kukatpally</div>
            <div className="location-card"> Miyapur</div>
            <div className="location-card"> LB Nagar</div>
            <div className="location-card"> Ameerpet</div>
            <div className="location-card"> Begumpet</div>
            <div className="location-card"> Hitech City</div>

            {/* Duplicate for Infinite Scroll */}

            <div className="location-card"> Punjagutta</div>
            <div className="location-card"> Banjara Hills</div>
            <div className="location-card"> Jubilee Hills</div>
            <div className="location-card"> Gachibowli</div>
            <div className="location-card"> Madhapur</div>
            <div className="location-card"> Secunderabad</div>
            <div className="location-card"> Kukatpally</div>
            <div className="location-card"> Miyapur</div>

        </div>

    </div>

</section>
     




<section className="review-section">

    <div className="section-header">

        <span>TESTIMONIALS</span>

        <h2>What Clients Say</h2>

        <div className="service-line"></div>

    </div>

    <div className="review-grid">

        <div className="review-card">

            <div className="stars">★★★★★</div>

            <p>
                Exceptional service and professional coordination
                from start to finish.
            </p>

            <div className="review-user">

                <div className="avatar">AS</div>

                <div>
                    <h4>Anita Sharma</h4>
                    <span>Pummy Coordinator</span>
                </div>

            </div>

        </div>

        <div className="review-card">

            <div className="stars">★★★★★</div>

            <p>
                Reliable and timely support. The entire process
                was smooth and stress-free.
            </p>

            <div className="review-user">

                <div className="avatar">VR</div>

                <div>
                    <h4>Vikram Rao</h4>
                    <span>Corporate Client</span>
                </div>

            </div>

        </div>

        <div className="review-card">

            <div className="stars">★★★★★</div>

            <p>
                Professional staff and excellent communication
                throughout the service.
            </p>

            <div className="review-user">

                <div className="avatar">KK</div>

                <div>
                    <h4>Kiran Kumar</h4>
                    <span>Family Member</span>
                </div>

            </div>

        </div>

    </div>

</section>




<section className="gallery-section">

    <div className="section-header">

        <span>GALLERY</span>

        <h2>Operations & Fleet</h2>

        <div className="service-line"></div>

    </div>

    <div className="gallery-grid">

        <img src="/assets/fleet1.jpg" alt="" />
        <img src="/assets/fleet2.jpg" alt="" />
        <img src="/assets/fleet3.jpg" alt="" />
        <img src="/assets/fleet4.jpg" alt="" />
        <img src="/assets/fleet5.jpg" alt="" />
        <img src="/assets/fleet6.jpg" alt="" />

    </div>

</section>




<section className="faq-section">

    <div className="section-header">

        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <div className="service-line"></div>

    </div>

    <div className="faq-container">

        <details open>
            <summary>
                How quickly can transportation be arranged?
            </summary>
            <p>
                Service availability depends on location and
                operational requirements.
            </p>
        </details>

        <details>
            <summary>
                Are advance bookings available?
            </summary>
            <p>
                Yes, transportation services can be scheduled
                in advance.
            </p>
        </details>

        <details>
            <summary>
                Is trained staff available?
            </summary>
            <p>
                Our team includes qualified professionals trained
                for patient assistance.
            </p>
        </details>

    </div>

</section>



<section className="contact-section">

    <div className="contact-left">

        <span className="contact-tag">
            CONTACT US
        </span>

        <h2>
            Let's Connect
        </h2>

        <div className="service-line"></div>

        <p>
            Reach out to discuss transportation requirements,
            partnerships, or support services.
        </p>

        <div className="contact-card">

            <div className="contact-icon">
                📞
            </div>

            <div className="contact-details">

                <h3>Support Line</h3>
                <p>+91 7989827051</p>
                <span>Available 24/7</span>

            </div>

        </div>

        <div className="contact-card">

            <div className="contact-icon">
                ✉️
            </div>

            <div className="contact-details">

                <h3>Email</h3>
                <p>pummyp673@gmail.com</p>
                <span>Customer Support</span>

            </div>

        </div>

    </div>

    <div className="contact-right">

        <h2>Send Inquiry</h2>

        <form className="booking-form">

            <div className="form-row">

                <input
                    type="text"
                    placeholder="Full Name"
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

            <textarea
                rows="6"
                placeholder="Message"
            ></textarea>

            <button type="submit">
                Submit Request
            </button>

        </form>

    </div>

</section>







           <Footer />
        </>

    );
}
import React from "react";
import styles from "./ContactUs.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.header}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with Mani Das Industries for reliable multi-layer poly
          film and packaging solutions.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className={styles.contactContainer}>
        {/* Left Side - Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Our Office</h2>
          <p>Plot No. 23, F-Block</p>
          <p>Auto Nagar, Visakhapatnam – 530012</p>
          <p>Andhra Pradesh, India</p>

          <h3>Phone</h3>
          <p>+91 9619923899</p>

          <h3>Email</h3>
          <p>manidaspolyfilms@gmail.com</p>

          <h3>Business Hours</h3>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>

        {/* Right Side - Form */}
        <div className={styles.formSection}>
          <h2>Send an Inquiry</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Company Name" />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea
              placeholder="Your Requirement / Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps?q=Auto+Nagar+Visakhapatnam&output=embed"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

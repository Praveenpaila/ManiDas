import React from "react";
import styles from "./Infrastructure.module.css";

const Infrastructure = () => {
  return (
    <div className={styles.infrastructurePage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Infrastructure & Manufacturing Facility</h1>
        <p>
          Equipped with advanced machinery and strong operational capabilities
          to ensure consistent production quality.
        </p>
      </section>

      {/* Facility Overview */}
      <section className={styles.section}>
        <h2>Manufacturing Facility</h2>
        <p>
          Located in Auto Nagar, Visakhapatnam, our unit operates with a
          production capacity of 100 MT per month and 120 kg per hour output.
        </p>
      </section>

      {/* Machinery Section */}
      <section className={styles.section}>
        <h2>Machinery & Equipment</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Multi-Layer Extrusion Machine</h3>
            <p>
              Used for manufacturing high-quality multi-layer poly films with
              consistent thickness and strength.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Two-Color Printing Machine</h3>
            <p>
              Enables custom branding and packaging design for dairy and food
              industries.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Production Accessories</h3>
            <p>
              Supporting equipment to maintain smooth and efficient production
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Utilities */}
      <section className={styles.section}>
        <h2>Utilities & Power</h2>
        <ul>
          <li>Connected Load: 200 HP</li>
          <li>Reliable Power Supply</li>
          <li>Water Availability: Sufficient</li>
          <li>Well-connected by Road, Rail & Air</li>
        </ul>
      </section>

      {/* Workforce */}
      <section className={styles.section}>
        <h2>Workforce & Operations</h2>
        <p>
          Our skilled operators, printing machine specialists, and management
          team ensure efficient production, quality control, and timely
          delivery.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Interested in Our Manufacturing Capabilities?</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Infrastructure;

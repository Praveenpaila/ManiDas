import React from "react";
import styles from "./Financial.module.css";
import { useNavigate } from "react-router-dom";

const Financial = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.financialPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Financial & Project Overview</h1>
        <p>
          A structured investment plan supporting modern manufacturing
          capabilities and long-term operational stability.
        </p>
      </section>

      {/* Project Investment */}
      <section className={styles.section}>
        <h2>Project Investment</h2>
        <p>
          The company has made significant investments in plant, machinery,
          civil infrastructure, and working capital to establish a strong
          manufacturing base.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Plant & Machinery</h3>
            <p>Advanced multi-layer extrusion and printing systems.</p>
          </div>

          <div className={styles.card}>
            <h3>Civil Infrastructure</h3>
            <p>Modern industrial facility in Auto Nagar, Visakhapatnam.</p>
          </div>

          <div className={styles.card}>
            <h3>Working Capital Support</h3>
            <p>Strong operational liquidity for continuous production.</p>
          </div>
        </div>
      </section>

      {/* Stability */}
      <section className={styles.section}>
        <h2>Operational Strength</h2>
        <ul>
          <li>100 MT Monthly Production Capacity</li>
          <li>120 KG/Hour Production Output</li>
          <li>110 HP Connected Power Load</li>
          <li>Growing Market Demand Across 6+ Districts</li>
        </ul>
      </section>

      {/* Growth Outlook */}
      <section className={styles.section}>
        <h2>Future Growth Outlook</h2>
        <p>
          With increasing demand for flexible packaging solutions in dairy and
          food sectors, the company is positioned for sustainable growth
          supported by modern technology and reliable raw material sourcing.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Interested in Partnering With Us?</h2>
        <button
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Financial;

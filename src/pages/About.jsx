import React from "react";
import styles from "./About.module.css";
import products from "../assets/assets";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <h1>About Mani Das Industries</h1>
        <p>
          A leading manufacturer of Multi-Layer Poly Films and Flexible
          Packaging Solutions based in Auto Nagar, Visakhapatnam.
        </p>
      </section>

      <section className={styles.content}>
        <h2>Company Overview</h2>
        <p>
          Mani Das Industries is a partnership firm engaged in manufacturing
          mulch film, lamination film, stretch film, and packaging films serving
          dairy, beverage, and food industries across Andhra Pradesh.
        </p>

        <h2>Our Vision</h2>
        <p>
          To deliver high-quality flexible packaging solutions using advanced
          manufacturing processes and reliable raw materials.
        </p>

        <h2>Infrastructure</h2>
        <p>
          Equipped with multi-layer extrusion machinery, two-color printing
          machines, and strong power infrastructure to ensure consistent
          production capacity.
        </p>
      </section>

      <section className={styles.videoSection}>
        <h2>Our Manufacturing Facility</h2>

        <div className={styles.videoBlock}>
          <video controls src={products.one} />
          <div className={styles.videoText}>
            <h3>Plant Overview</h3>
            <p>
              A complete view of our manufacturing unit located in Auto Nagar,
              Visakhapatnam.
            </p>
          </div>
        </div>

        <div className={`${styles.videoBlock} ${styles.reverse}`}>
          <video controls src={products.two} />
          <div className={styles.videoText}>
            <h3>Production Process</h3>
            <p>
              Multi-layer extrusion and printing process ensuring quality and
              consistency.
            </p>
          </div>
        </div>

        <div className={styles.videoBlock}>
          <video controls src={products.three} />
          <div className={styles.videoText}>
            <h3>Machinery & Equipment</h3>
            <p>
              Advanced machines supporting high-capacity poly film production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import styles from "./About.module.css";
import { useSelector } from "react-redux";
const About = () => {
  const videos = useSelector((state) => state.videos.videos) || {};
  console.log(videos);
  return (
    <div className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>About Mani Das Industries</h1>
        <p>
          Established in 2015, Mani Das Industries is a leading manufacturer of
          Multi-Layer Poly Films and Flexible Packaging Solutions based in Auto
          Nagar, Visakhapatnam.
        </p>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className={styles.section}>
        <h2>Company Overview</h2>
        <p>
          Mani Das Industries is a partnership firm engaged in the manufacturing
          of multi-layer poly films, mulch films, lamination films, and stretch
          films serving dairy, beverage, and food industries across Andhra
          Pradesh.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className={`${styles.section} ${styles.alt}`}>
        <h2>Our Vision</h2>
        <p>
          To deliver high-quality flexible packaging solutions using advanced
          manufacturing processes, reliable raw materials, and continuous
          operational excellence.
        </p>
      </section>

      {/* LEADERSHIP */}
      <section className={styles.section}>
        <h2>Leadership & Management</h2>

        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <h3>Production Head</h3>
            <p>G Ramu</p>
          </div>
          <div className={styles.teamCard}>
            <h3>Founder</h3>
            <p>PI Prakash Kumar</p>
          </div>

          <div className={styles.teamCard}>
            <h3>General Manager</h3>
            <p>P Kranthi Prakash</p>
          </div>

          <div className={styles.teamCard}>
            <h3>Finance Manager</h3>
            <p>D Chittibabu</p>
          </div>

          <div className={styles.teamCard}>
            <h3>Production Incharge</h3>
            <p>B Krishna</p>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className={styles.videoSection}>
        <h2>Our Manufacturing Facility</h2>

        <div className={`${styles.videoBlock}`}>
          <video controls src={videos?.two} />
          <div className={styles.videoText}>
            <h3>Production Process</h3>
            <p>
              Multi-layer extrusion and printing process ensuring consistent
              thickness, sealing strength, and durability.
            </p>
          </div>
        </div>

        <div className={`${styles.videoBlock} ${styles.reverse}`}>
          <video controls src={videos?.three} />
          <div className={styles.videoText}>
            <h3>Machinery & Equipment</h3>
            <p>
              Advanced multi-layer extrusion machinery and two-color printing
              systems supporting high-quality film production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

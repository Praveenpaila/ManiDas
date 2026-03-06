import React from "react";
import styles from "./Home.module.css";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src={assets.products.hero7}
          alt="Poly Film Manufacturing Plant"
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>Mani Das Industries</h1>
          <h2>
            Manufacturers of Multi-Layer Poly Films & Flexible Packaging
            Solutions
          </h2>
          <p>
            Serving dairy, beverage, and food industries across Andhra Pradesh.
          </p>

          <button
            onClick={() => navigate("/contact-us")}
            className={styles.ctaButton}
          >
            Request a Quote
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.statBox}>
          <h3>100 MT</h3>
          <p>Monthly Production Capacity</p>
        </div>

        <div className={styles.statBox}>
          <h3>120 KG/Hr</h3>
          <p>Production Output</p>
        </div>

        <div className={styles.statBox}>
          <h3>200 HP</h3>
          <p>Connected Power Load</p>
        </div>

        <div className={styles.statBox}>
          <h3>24/7</h3>
          <p>Operational Capability</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <h2>Our Services</h2>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Multilayer Polythene Film</h3>
            <p>
              High-performance 3-layer co-extruded polyethylene films
              manufactured with advanced technology.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Shrink Film</h3>
            <p>
              Durable and flexible packaging solutions for industrial and retail
              applications.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Stretch Film</h3>
            <p>
              High elasticity wrapping film ensuring secure storage and
              transportation.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.productsPreview}>
        <h2>Our Products</h2>

        <div className={styles.productGrid}>
          <div className={styles.card}>Mulch Film</div>
          <div className={styles.card}>Lamination Film</div>
          <div className={styles.card}>Milk Packaging Film</div>
          <div className={styles.card}>Stretch Film</div>
        </div>

        <button
          className={styles.secondaryBtn}
          onClick={() => navigate("/product")}
        >
          View All Products
        </button>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.whySection}>
        <h2>Why Choose Mani Das Industries?</h2>
        <p>
          Established in 2015, operating 365 days a year with strong
          manufacturing infrastructure, skilled workforce, and consistent
          quality control processes.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaSection}>
        <h2>Looking for Reliable Poly Film Solutions?</h2>
        <button onClick={() => navigate("/contact-us")}>
          Contact Us Today
        </button>
      </section>
    </>
  );
};

export default Home;

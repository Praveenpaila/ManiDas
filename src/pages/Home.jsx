import React from "react";
import styles from "./Home.module.css";
import products from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.hero}>
        <img
          src={products.hero7}
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
            onClick={() => {
              navigate("/contact-us");
            }}
            className={styles.ctaButton}
          >
            Request a Quote
          </button>
        </div>
      </section>

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
          <h3>6+ Districts</h3>
          <p>Market Coverage</p>
        </div>
      </section>

      <section className={styles.aboutPreview}>
        <h2>About Mani Das Industries</h2>
        <p>
          Mani Das Industries is a partnership firm based in Auto Nagar,
          Visakhapatnam, specializing in the manufacture of multi-layer poly
          films for dairy, food, and beverage industries across Andhra Pradesh.
        </p>
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          Read More
        </button>
      </section>

      <section className={styles.productsPreview}>
        <h2>Our Products</h2>

        <div className={styles.productGrid}>
          <div className={styles.card}>Mulch Film</div>
          <div className={styles.card}>Lamination Film</div>
          <div className={styles.card}>Milk Packaging Film</div>
          <div className={styles.card}>Stretch Film</div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Looking for Reliable Poly Film Solutions?</h2>
        <button
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          Contact Us Today
        </button>
      </section>
    </>
  );
};

export default Home;

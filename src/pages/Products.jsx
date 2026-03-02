import React from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.productsPage}>
      {/* HERO */}
      <section className={styles.header}>
        <h1>Our Products</h1>
        <p>
          High-quality multi-layer polyethylene films engineered for dairy,
          beverage, agricultural, industrial, and food packaging applications.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className={styles.productSection}>
        <div className={styles.card}>
          <h2>Mulch Film</h2>
          <p>
            Agricultural film designed for soil moisture retention, temperature
            regulation, and crop protection.
          </p>
          <ul>
            <li>High durability</li>
            <li>UV resistant</li>
            <li>Custom thickness options</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Lamination Film</h2>
          <p>
            Flexible packaging film suitable for dairy, liquid, and powder
            applications.
          </p>
          <ul>
            <li>Strong sealing strength</li>
            <li>Moisture resistant</li>
            <li>Excellent print compatibility</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Milk Packaging Film</h2>
          <p>
            Food-grade film with high barrier properties ensuring leak
            resistance and hygiene.
          </p>
          <ul>
            <li>Food-safe quality</li>
            <li>High tensile strength</li>
            <li>Custom branding available</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Stretch Film</h2>
          <p>
            High elasticity wrapping film ensuring secure transportation and
            load stability.
          </p>
          <ul>
            <li>Industrial-grade durability</li>
            <li>Strong load stability</li>
            <li>High flexibility</li>
          </ul>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className={styles.techSection}>
        <h2>Technology Behind Our 3-Layer PE Films</h2>

        <p>
          Our films are manufactured using advanced 3-layer co-extrusion
          technology combining LDPE, LLDPE, and HDPE resins to deliver
          exceptional strength, barrier properties, and cost efficiency.
        </p>

        <div className={styles.techGrid}>
          <div>
            <h3>Layer Structure (ABC)</h3>
            <p>
              Optimized skin layers ensure sealing and printability, while the
              core layer provides mechanical strength and durability.
            </p>
          </div>

          <div>
            <h3>Key Advantages</h3>
            <ul>
              <li>Superior tear & puncture resistance</li>
              <li>Improved moisture & oxygen barrier</li>
              <li>Cost-efficient core material optimization</li>
              <li>Customizable properties (UV, anti-static)</li>
            </ul>
          </div>

          <div>
            <h3>Applications</h3>
            <ul>
              <li>Agricultural films (mulch, greenhouse)</li>
              <li>Industrial packaging sacks</li>
              <li>Dairy & food packaging films</li>
              <li>Retail & stretch films</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className={styles.whySection}>
        <h2>Why Choose Mani Das Industries?</h2>
        <p>
          Established in 2015, we operate with modern extrusion machinery,
          skilled technical expertise, and consistent quality control processes
          to ensure reliable and high-performance packaging solutions.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Need Custom Packaging Solutions?</h2>
        <button onClick={() => navigate("/contact-us")}>Request a Quote</button>
      </section>
    </div>
  );
};

export default Products;

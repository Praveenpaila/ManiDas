import React from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.productsPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Our Products</h1>
        <p>
          High-quality multi-layer poly films designed for dairy, beverage, and
          food packaging industries.
        </p>
      </section>

      {/* Product Grid */}
      <section className={styles.productSection}>
        <div className={styles.card}>
          <h2>Mulch Film</h2>
          <p>
            Used in agriculture for soil moisture retention, temperature
            control, and crop protection.
          </p>
          <ul>
            <li>High durability</li>
            <li>UV resistant</li>
            <li>Available in multiple thickness options</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Lamination Film</h2>
          <p>
            Ideal for flexible packaging applications such as milk powder and
            liquid packaging.
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
            Designed for dairy packaging with high barrier properties and leak
            resistance.
          </p>
          <ul>
            <li>Food-grade quality</li>
            <li>High tensile strength</li>
            <li>Custom printing available</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Stretch Film</h2>
          <p>
            Used for wrapping and securing products during storage and
            transportation.
          </p>
          <ul>
            <li>High elasticity</li>
            <li>Strong load stability</li>
            <li>Industrial-grade quality</li>
          </ul>
        </div>
      </section>

      {/* Why Our Products */}
      <section className={styles.whySection}>
        <h2>Why Choose Our Products?</h2>
        <p>
          Manufactured using advanced multi-layer extrusion technology with
          consistent quality control and reliable raw material sourcing.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Need Custom Packaging Solutions?</h2>

        <button
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default Products;

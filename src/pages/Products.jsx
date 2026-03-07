import React from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
const Products = () => {
  const images = useSelector((state) => state.images.images);
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
        <h2 className={styles.productHeading}>Our Product Gallery</h2>

        <div className={styles.productGrid}>
          {Object.values(images).map((img, index) => (
            <ProductCard key={index} img={img} />
          ))}
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
          <div className={styles.card}>
            <h3>Layer Structure (ABC)</h3>
            <p>
              Optimized skin layers ensure sealing and printability, while the
              core layer provides mechanical strength and durability.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Key Advantages</h3>
            <ul>
              <li>Superior tear & puncture resistance</li>
              <li>Improved moisture & oxygen barrier</li>
              <li>Cost-efficient core material optimization</li>
              <li>Customizable properties (UV, anti-static)</li>
            </ul>
          </div>

          <div className={styles.card}>
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

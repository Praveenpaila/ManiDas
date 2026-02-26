import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.section}>
          <h3>Mani Das Industries</h3>
          <p>
            Manufacturers of Multi-Layer Poly Films & Flexible Packaging
            Solutions serving dairy, food, and beverage industries across Andhra
            Pradesh.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/infrastructure">Infrastructure</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Plot No. 23, F-Block, Auto Nagar</p>
          <p>Visakhapatnam – 530012</p>
          <p>Phone: +91 99498 88242</p>
          <p>Email: manidaspolyfilms@gmail.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Mani Das Industries. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

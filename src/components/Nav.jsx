import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">Mani Das Industries</Link>
        </div>

        <div className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/product" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/infrastructure" onClick={() => setMenuOpen(false)}>
            Infrastructure
          </Link>
          <Link to="/financial" onClick={() => setMenuOpen(false)}>
            Financial
          </Link>
          <Link
            to="/contact-us"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Nav;

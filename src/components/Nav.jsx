import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.logo}>
          <NavLink to="/">Mani Das Industries</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Products</NavLink>
          <NavLink to="/infrastructure">Infrastructure</NavLink>
          <NavLink to="/financial">Financial</NavLink>

          <NavLink to="/contact-us" className={styles.cta}>
            Contact Us
          </NavLink>
        </nav>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </header>
  );
};

export default Nav;

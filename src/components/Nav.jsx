import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import assets from "../assets/assets";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // 👇 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.container} ref={navRef}>
        {/* LEFT SIDE */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={assets.products.logo} alt="" />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/product" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/infrastructure" onClick={() => setMenuOpen(false)}>
            Infrastructure
          </NavLink>
          <NavLink to="/financial" onClick={() => setMenuOpen(false)}>
            Financial
          </NavLink>

          <NavLink
            to="/contact-us"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
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

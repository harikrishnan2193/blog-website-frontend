"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div
          className={`${styles.logo} ${
            isScrolled ? styles.logoScrolled : styles.logoWhite
          }`}
        >
          <span className={styles.logoIcon}>
            <FontAwesomeIcon icon={faRunning} />
          </span>
          <span>FitLife</span>
        </div>

        <nav className={styles.navMenu}>
          <Link
            href="/home"
            className={`${styles.navLink} ${
              isScrolled ? styles.navLinkScrolled : styles.navLinkWhite
            }`}
          >
            Home
          </Link>
          <Link
            href="/workouts"
            className={`${styles.navLink} ${
              isScrolled ? styles.navLinkScrolled : styles.navLinkWhite
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/articles"
            className={`${styles.navLink} ${
              isScrolled ? styles.navLinkScrolled : styles.navLinkWhite
            }`}
          >
            Articles
          </Link>
          <Link
            href="/nutrition"
            className={`${styles.navLink} ${
              isScrolled ? styles.navLinkScrolled : styles.navLinkWhite
            }`}
          >
            Nutrition
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${
              isScrolled ? styles.navLinkScrolled : styles.navLinkWhite
            }`}
          >
            About
          </Link>
        </nav>

        <button
          className={`${styles.mobileToggle} ${
            isScrolled ? styles.mobileToggleScrolled : styles.mobileToggleWhite
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link
              href="/home"
              className={styles.mobileMenuLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/workouts"
              className={styles.mobileMenuLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Workouts
            </Link>
            <Link
              href="/articles"
              className={styles.mobileMenuLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/nutrition"
              className={styles.mobileMenuLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nutrition
            </Link>
            <Link
              href="/about"
              className={styles.mobileMenuLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import styles from "./Navbar.module.css";

const INDUSTRIES = [
  "Tour & Travel",
  "Coaching & EdTech",
  "Real Estate",
  "Fintech",
  "Consulting Firms",
  "B2B Services",
  "Healthcare",
  "Event & Ticketing",
];

const FEATURES = [
  "AI Qualification",
  "Lead Management",
  "Auto Follow-ups",
  "WhatsApp CRM",
  "WhatsApp API",
  "Integrations",
  "Lead Capture",
  "WhatsApp conversion API",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Onlyfold logo.png" alt="Onlyfold Logo" width={150} height={32} />
        </Link>

        <nav className={styles.navLinks}>
          <DropdownMenu label="Industry" items={INDUSTRIES} />
          <DropdownMenu label="Features" items={FEATURES} />
          <Link href="#reviews" className={styles.navLink}>
            Customer Reviews
          </Link>
          <Link href="#pricing" className={styles.navLink}>
            Pricing
          </Link>
        </nav>

        <div className={styles.navActions}>
          <Button variant="outline" href="#trial">
            Start Free Trial
          </Button>
          <Button variant="primary" href="#demo">
            Request demo
          </Button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={styles.hamburgerLine}
            style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}
          />
          <span
            className={styles.hamburgerLine}
            style={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <span
            className={styles.hamburgerLine}
            style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        industries={INDUSTRIES}
        features={FEATURES}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

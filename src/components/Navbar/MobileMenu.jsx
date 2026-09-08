"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./Navbar.module.css";

export default function MobileMenu({ isOpen, industries, features, closeMenu }) {
  return (
    <motion.div
      className={styles.mobileMenu}
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={styles.mobileNavList}>
        <div className={styles.mobileNavItem}>
          <span>Industry</span>
          <ul style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {industries.map((item, i) => (
              <li key={i} style={{ fontSize: "1rem", fontWeight: "400", color: "var(--text-grey)" }}>
                <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} onClick={closeMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mobileNavItem}>
          <span>Features</span>
          <ul style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {features.map((item, i) => (
              <li key={i} style={{ fontSize: "1rem", fontWeight: "400", color: "var(--text-grey)" }}>
                <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} onClick={closeMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="#reviews" className={styles.mobileNavItem} onClick={closeMenu}>
          Customer Reviews
        </Link>
        <Link href="#pricing" className={styles.mobileNavItem} onClick={closeMenu}>
          Pricing
        </Link>
      </div>

      <div className={styles.mobileActions}>
        <Button variant="outline" href="#trial" onClick={closeMenu}>
          Start Free Trial
        </Button>
        <Button variant="primary" href="#demo" onClick={closeMenu}>
          Request demo
        </Button>
      </div>
    </motion.div>
  );
}

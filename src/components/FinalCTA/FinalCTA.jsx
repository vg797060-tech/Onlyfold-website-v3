"use client";

import styles from "./FinalCTA.module.css";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function FinalCTA() {
  return (
    <section className={styles.finalCtaSection} id="trial">
      <div className={styles.gradientBg}></div>
      
      <div className={`container ${styles.content}`}>
        <SectionWrapper animationType="fade-up" stagger={0.15} className={styles.wrapper}>
          <h2 className={styles.headline}>Every lead you don't close, a competitor will.</h2>
          <p className={styles.subcopy}>
            See exactly how Onlyfold qualifies, recovers, and routes your inquiries—custom-built for your agency, shown in a quick 15-minute demo.
          </p>
          
          <div className={styles.ctaWrapper}>
            <Button variant="white" href="#demo" className={styles.ctaButton}>
              Book Your Custom Demo
            </Button>
          </div>
          
          <div className={styles.trustBadges}>
            <span>Official Meta API</span>
            <span className={styles.dot}>•</span>
            <span>Zero Ban Risk</span>
            <span className={styles.dot}>•</span>
            <span>Complete Done-For-You Setup</span>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

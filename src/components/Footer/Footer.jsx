import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const FOOTER_LINKS = {
  features: [
    { label: "Lead Management", href: "#" },
    { label: "WhatsApp AI Bot", href: "#" },
    { label: "Broadcast Lists", href: "#" },
    { label: "Auto Triggers", href: "#" },
  ],
  comparisons: [
    { label: "Onlyfold vs Wati", href: "#" },
    { label: "Onlyfold vs AISensy", href: "#" },
  ],
  industries: [
    { label: "Coaching & EdTech", href: "#" },
    { label: "Real Estate", href: "#" },
    { label: "Fintech", href: "#" },
    { label: "B2B Services", href: "#" },
    { label: "Events & Ticketing", href: "#" },
  ],
  resources: [
    { label: "Support", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "API Documentation", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <SectionWrapper animationType="fade-up" className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image src="/images/Onlyfold footer logo.png" alt="Onlyfold" width={150} height={32} style={{ objectFit: "contain" }} />
            </Link>
            <p className={styles.tagline}>Turn conversations into closed deals.</p>
            <Button variant="primary" href="#demo" className={styles.cta}>
              BOOK A FREE DEMO
            </Button>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>FEATURES</h4>
              <ul>
                {FOOTER_LINKS.features.map((link, i) => (
                  <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>COMPARISONS</h4>
              <ul>
                {FOOTER_LINKS.comparisons.map((link, i) => (
                  <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>INDUSTRIES</h4>
              <ul>
                {FOOTER_LINKS.industries.map((link, i) => (
                  <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>RESOURCES</h4>
              <ul>
                {FOOTER_LINKS.resources.map((link, i) => (
                  <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4>COMPANY</h4>
              <ul>
                {FOOTER_LINKS.company.map((link, i) => (
                  <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© Onlyfold, 2026. All rights reserved worldwide.</p>
          
          <div className={styles.socials}>
            <span>Follow Us:</span>
            <Link href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="#" aria-label="X (Twitter)" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" aria-label="YouTube" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </Link>
            <Link href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

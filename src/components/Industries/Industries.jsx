import styles from "./Industries.module.css";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const INDUSTRIES = [
  { name: "Tour & Travel", icon: "🏕️" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Coaching & EdTech", icon: "🎓" },
  { name: "Fintech", icon: "💰" },
  { name: "Healthcare", icon: "🏥" },
  { name: "B2B Services", icon: "🤝" },
  { name: "Consulting Firms", icon: "📊" },
  { name: "Events & Ticketing", icon: "🎫" },
];

export default function Industries() {
  return (
    <section className={styles.industriesSection} id="industries">
      {/* Background glow effects based on Figma */}
      <div className={styles.glowContainer}>
        <div className={styles.glowPurple}></div>
        <div className={styles.glowBlue}></div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <SectionWrapper animationType="fade-up" className={styles.header}>
          <span className={styles.eyebrow}>INDUSTRIES</span>
          <h2 className={styles.headline}>Built for businesses that initiate or close deals on WhatsApp.</h2>
          <p className={styles.subcopy}>
            Onlyfold automates high-intent sales pipelines from first touch to sales.
          </p>
        </SectionWrapper>

        <SectionWrapper animationType="scale-up" stagger={0.1} className={styles.grid}>
          {INDUSTRIES.map((industry, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{industry.icon}</div>
              <h3 className={styles.cardTitle}>{industry.name}</h3>
            </div>
          ))}
        </SectionWrapper>

        <SectionWrapper animationType="fade-up" className={styles.ctaWrapper}>
          <Button variant="outline" href="#demo" className={styles.ctaButton}>
            Try Onlyfold →
          </Button>
        </SectionWrapper>
      </div>
    </section>
  );
}

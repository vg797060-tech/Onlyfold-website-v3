import styles from "./Integrations.module.css";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import OrbitDiagram from "./OrbitDiagram";

const FEATURES = [
  {
    icon: "✅",
    title: "Zero integration headaches:",
    desc: "We custom-configure your ad accounts, webhooks, and forms during onboarding so your pipeline is bulletproof.",
  },
  {
    icon: "✅",
    title: "Always in sync:",
    desc: "Incoming leads trigger instant workflows in true real time, not slow scheduled batches.",
  },
  {
    icon: "✅",
    title: "Phone dedup everywhere:",
    desc: "Normalizes every contact by phone number so reps never cross wires or pitch the same buyer twice.",
  },
  {
    icon: "✅",
    title: "AI picks up immediately:",
    desc: "Lead qualified on WhatsApp instantly, regardless of where the prospect clicked.",
  },
];

export default function Integrations() {
  return (
    <section className={styles.integrationsSection} id="integrations">
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.textContent}>
          <SectionWrapper animationType="fade-up" className={styles.header}>
            <Badge className="teal">INTEGRATION</Badge>
            <h2 className={styles.headline}>Connects with the lead sources your business runs on.</h2>
            <p className={styles.subcopy}>
              Every inquiry flows straight into Onlyfold - unified, cleaned, and actioned automatically.
            </p>
          </SectionWrapper>

          <SectionWrapper animationType="fade-up" stagger={0.15} className={styles.featureList}>
            {FEATURES.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.icon}>{feature.icon}</span>
                <p>
                  <strong>{feature.title}</strong> {feature.desc}
                </p>
              </div>
            ))}
          </SectionWrapper>
        </div>

        <SectionWrapper animationType="scale-up" className={styles.visualContent}>
          <OrbitDiagram />
        </SectionWrapper>
      </div>
    </section>
  );
}

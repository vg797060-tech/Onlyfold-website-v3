"use client";

import { useRef } from "react";
import styles from "./Features.module.css";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FEATURE_CARDS = [
  {
    icon: "+",
    title: "Lead lands",
    description: "Every enquiry - ads, web forms, a missed call or more drops directly into our CRM.",
  },
  {
    icon: "💬",
    title: "Onlyfold Qualifies",
    description: "Instantly asks your discovery questions to filter out tire-kickers and identify high-intent leads.",
  },
  {
    icon: "🔄",
    title: "Relentless Follow-up",
    description: "Chases unresponsive leads for days using a tight, automated sequence until they finally reply.",
  },
  {
    icon: "🔥",
    title: "Flags the Hot Leads",
    description: "The exact moment a prospect signals buying intent, your sales team gets a Slack or CRM alert to take over.",
  },
  {
    icon: "📱",
    title: "Your rep closes",
    description: "Your Account Executive steps in with the full chat history drafted, ready to jump on a call and close the deal.",
  },
];

export default function Features() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const cards = gsap.utils.toArray(".feature-card-anim");
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        cards,
        { x: -100, y: 0, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        cards,
        { x: 0, y: -50, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className={styles.featuresSection} id="features">
      <div className="container" ref={containerRef}>
        <SectionWrapper animationType="fade-up" className={styles.header}>
          <Badge className="teal">HOW THE SYSTEM WORKS</Badge>
          <h2 className={styles.headline}>One AI powered system, Zero leaked leads.</h2>
          <p className={styles.subcopy}>
            Every lead runs the exact same path engaged instantly, qualified automatically, and handed to your sales reps the moment they are ready to buy.
          </p>
        </SectionWrapper>

        <div className={styles.cardsGrid}>
          {FEATURE_CARDS.map((card, index) => (
            <div key={index} className={`${styles.card} feature-card-anim`} style={{ zIndex: FEATURE_CARDS.length - index }}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{card.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              
              {index < FEATURE_CARDS.length - 1 && (
                <div className={styles.connectorArrow}>→</div>
              )}
            </div>
          ))}
        </div>

        <SectionWrapper animationType="fade-up" className={styles.ctaWrapper}>
          <Button variant="outlineWhite" className={styles.bottomCta}>
            You run a sales operation — your team just takes the calls.
          </Button>
        </SectionWrapper>
      </div>
    </section>
  );
}

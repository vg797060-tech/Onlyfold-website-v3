"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Calculator.module.css";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Calculator() {
  const [leads, setLeads] = useState(50);
  const [dealValue, setDealValue] = useState(8000);
  const [recovery, setRecovery] = useState(6);
  const [annualRecovery, setAnnualRecovery] = useState(0);

  const resultRef = useRef(null);

  useEffect(() => {
    const recoveryTotal = leads * dealValue * (recovery / 100) * 12;
    setAnnualRecovery(recoveryTotal);
  }, [leads, dealValue, recovery]);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Animate the result number whenever it changes
    const node = resultRef.current;
    if (node) {
      const targetValue = annualRecovery;
      const currentValue = parseFloat(node.getAttribute("data-value") || "0");
      
      gsap.to(node, {
        innerHTML: targetValue,
        duration: 0.8,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        onUpdate: function () {
          node.innerHTML = `₹${Math.ceil(this.targets()[0].innerHTML).toLocaleString()}`;
        },
        onComplete: () => {
          node.setAttribute("data-value", targetValue);
        }
      });
    }
  }, [annualRecovery]);

  return (
    <section className={styles.calculatorSection} id="pricing">
      <div className="container">
        <SectionWrapper animationType="fade-up" className={styles.header}>
          <Badge className="teal">THE COST OF THE LEAK</Badge>
          <h2 className={styles.headline}>See what you're leaving on the table.</h2>
          <p className={styles.subcopy}>
            Stop competing with time. See immediate value and get an estimate of what Onlyfold recovers from the leads you already pay for.
          </p>
        </SectionWrapper>

        <SectionWrapper animationType="fade-up" className={styles.calculatorWrapper}>
          <div className={styles.calculatorCard}>
            
            <div className={styles.slidersContainer}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <label>Leads Per Month</label>
                  <span className={styles.sliderValue}>{leads}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className={styles.slider}
                  style={{ '--progress': `${((leads - 10) / 990) * 100}%` }}
                />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <label>Average deal value (₹)</label>
                  <span className={styles.sliderValue}>{dealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className={styles.slider}
                  style={{ '--progress': `${((dealValue - 500) / 99500) * 100}%` }}
                />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <label>Approx. leads Onlyfold recovers</label>
                  <span className={styles.sliderValue}>{recovery}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={recovery}
                  onChange={(e) => setRecovery(Number(e.target.value))}
                  className={styles.slider}
                  style={{ '--progress': `${((recovery - 1) / 19) * 100}%` }}
                />
              </div>
            </div>

            <div className={styles.resultContainer}>
              <div className={styles.resultContent}>
                <p className={styles.resultLabel}>Estimated annual recovery</p>
                <div className={styles.resultAmount} ref={resultRef} data-value="0">
                  ₹0
                </div>
                <p className={styles.resultDesc}>
                  That's revenue slipping away without a system to recover it.
                </p>
                
                <Button variant="primary" href="#demo" className={styles.resultCta}>
                  Book a demo to plug the leak
                </Button>

                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <strong>10x</strong>
                    <span>Fast response</span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>24/7</strong>
                    <span>Availability</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

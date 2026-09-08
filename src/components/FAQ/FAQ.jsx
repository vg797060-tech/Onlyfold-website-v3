"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/ui/SectionWrapper";

const FAQS = [
  {
    q: "Will all this follow-up get my WhatsApp number banned?",
    a: "No. Onlyfold runs on the official WhatsApp Business API as a verified partner. Every message is sent through approved, compliant channels so your number stays safe while the system follows up."
  },
  {
    q: "Do I need any technical skills to set this up?",
    a: "Not at all. Our team handles the entire setup, configuration, and integration process for you during onboarding."
  },
  {
    q: "How fast does it go live?",
    a: "Typically, we can have your custom system fully configured and running within 48 to 72 hours from kickoff."
  },
  {
    q: "What if it doesn't work for us?",
    a: "We offer a performance guarantee. If the system doesn't recover leads as projected, we will work with you to optimize it or offer a refund according to our terms."
  },
  {
    q: "How is this different from AiSensy, Wati, or Meta's free AI?",
    a: "Unlike standard broadcasting tools, Onlyfold is purpose-built for sales pipeline automation. It intelligently qualifies leads, handles objections, and seamlessly hands off hot prospects to your human reps."
  },
  {
    q: "We already have a CRM. Why do we need Onlyfold?",
    a: "Onlyfold acts as the intelligent layer between your lead sources and your CRM. It does the heavy lifting of qualifying and following up, ensuring only sales-ready leads ever enter your CRM."
  },
  {
    q: "Will the AI message my leads on its own and say the wrong thing?",
    a: "No. The AI operates strictly within the guardrails and knowledge base we establish together. It's trained on your specific products, pricing, and FAQs to ensure accurate responses."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <SectionWrapper animationType="fade-up" className={styles.header}>
          <Badge>FAQ</Badge>
          <h2 className={styles.headline}>The questions every founder asks.</h2>
        </SectionWrapper>

        <SectionWrapper animationType="fade-up" className={styles.faqList}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleOpen(index)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span className={styles.faqIcon}>
                    <motion.svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </motion.svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.faqAnswerWrapper}
                    >
                      <div className={styles.faqAnswer}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </SectionWrapper>
      </div>
    </section>
  );
}

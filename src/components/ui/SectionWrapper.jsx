"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { setupFadeUpAnimation, setupScaleUpAnimation } from "@/lib/animations";

export default function SectionWrapper({
  children,
  animationType = "fade-up",
  className = "",
  stagger = 0,
  ...props
}) {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useGSAP(() => {
    if (elementsRef.current.length > 0) {
      if (animationType === "fade-up") {
        setupFadeUpAnimation(elementsRef.current, sectionRef.current, stagger);
      } else if (animationType === "scale-up") {
        setupScaleUpAnimation(elementsRef.current, sectionRef.current, stagger);
      }
    } else {
      // If no children refs collected, animate the whole section
      if (animationType === "fade-up") {
        setupFadeUpAnimation(sectionRef.current, sectionRef.current, 0);
      } else if (animationType === "scale-up") {
        setupScaleUpAnimation(sectionRef.current, sectionRef.current, 0);
      }
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={className} {...props}>
      {children}
    </section>
  );
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger if running on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const setupFadeUpAnimation = (elements, trigger, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: stagger,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const setupScaleUpAnimation = (elements, trigger, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: stagger,
      scrollTrigger: {
        trigger: trigger,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

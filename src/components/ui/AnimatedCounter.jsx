"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const nodeRef = useRef(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const node = nodeRef.current;
    if (!node) return;

    // Remove commas from value if string, parse to float
    const numValue = typeof value === "string" ? parseFloat(value.replace(/,/g, "")) : value;

    gsap.fromTo(
      node,
      { innerHTML: 0 },
      {
        innerHTML: numValue,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: node,
          start: "top 80%",
        },
        snap: { innerHTML: 1 }, // snap to integer
        onUpdate: function () {
          // Format with commas and add prefix/suffix
          node.innerHTML = `${prefix}${Math.ceil(this.targets()[0].innerHTML).toLocaleString()}${suffix}`;
        },
      }
    );
  }, [value, prefix, suffix, duration]);

  return <span ref={nodeRef} className={className}>0</span>;
}

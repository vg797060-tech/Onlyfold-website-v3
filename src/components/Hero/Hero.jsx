"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import VideoLightbox from "./VideoLightbox";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".hero-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={`${styles.eyebrow} hero-anim`}>
            OFFICIAL WHATSAPP BUSINESS API
          </div>
          
          <h1 className={`${styles.headline} hero-anim`}>
            <span className="text-gradient">Don't lose leads</span> you've already paid for.
          </h1>
          
          <p className={`${styles.subcopy} hero-anim`}>
            Automate your business with AI Sales & Customer Support System
          </p>
          
          <div className={`${styles.ctaContainer} hero-anim`}>
            <Button variant="primary" href="#demo">
              Book a Free expert session →
            </Button>
          </div>
        </div>

        <div className={`${styles.videoSection} hero-anim`} onClick={() => setIsVideoOpen(true)}>
          <Image
            src="/images/hero-section-video-thumbnail.png"
            alt="Onlyfold Video Thumbnail"
            width={1000}
            height={562}
            priority
          />
          <div className={styles.playButtonOverlay}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <VideoLightbox isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}

import Image from "next/image";
import styles from "./LogoBar.module.css";
import SectionWrapper from "@/components/ui/SectionWrapper";

const LOGOS = [
  { src: "/images/media_1788683155019.png", alt: "Clat Prep", width: 120 },
  { src: "/images/media_1788683183655.png", alt: "AIM", width: 100 },
  { src: "/images/media_1788683260744.png", alt: "RAW Defence", width: 120 },
  { src: "/images/media_1788683338603.png", alt: "Epic Tickets", width: 140 },
  { src: "/images/media_1788683398876.png", alt: "Andromeda", width: 150 },
];

export default function LogoBar() {
  // Duplicate logos for seamless infinite scroll
  const scrollLogos = [...LOGOS, ...LOGOS];

  return (
    <SectionWrapper animationType="fade-up" className={styles.logoBar}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>TRUSTED BY EXPERTS.</span>
          <h2 className={styles.headline}>Used by the leaders.</h2>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {scrollLogos.map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={60}
                  style={{ objectFit: "contain", opacity: 0.7 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
